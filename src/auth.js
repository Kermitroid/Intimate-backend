
// server/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const SECRET = process.env.JWT_SECRET || "bolttube_secret_key";
const usersPath = path.join(__dirname, "users.json");

const loadUsers = () => {
  try {
    return JSON.parse(fs.readFileSync(usersPath));
  } catch {
    return [];
  }
};

const saveUsers = (data) => {
  fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
};

// Create a new user
router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Missing fields" });

  const users = loadUsers();
  if (users.find((u) => u.username === username))
    return res.status(400).json({ error: "User already exists" });

  users.push({ username, password });
  saveUsers(users);
  const token = jwt.sign({ username }, SECRET, { expiresIn: "7d" });
  res.json({ token });
});

// Login existing user
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const users = loadUsers();
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user)
    return res.status(401).json({ error: "Invalid username or password" });

  const token = jwt.sign({ username }, SECRET, { expiresIn: "7d" });
  res.json({ token });
});

// Verify user session
router.get("/profile", (req, res) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer "))
    return res.status(401).json({ error: "No token" });

  try {
    const decoded = jwt.verify(auth.split(" ")[1], SECRET);
    res.json({ user: decoded });
  } catch {
    res.status(401).json({ error: "Invalid or expired token" });
  }
});

module.exports = router;
