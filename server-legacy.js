const express = require("express");
const cors = require("cors");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
const { exec } = require("child_process");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

const port = process.env.PORT || 3001;
const SECRET = "tube_secret_key";

// Load static JSON data at startup (can be replaced with dynamic later)
const users = require("./src/data/users.json");
const captions = require("./src/data/captions.json");
const subscriptions = require("./src/data/subscriptions.json");
const moderation = require("./src/data/moderation.json");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "../dist")));

const upload = multer({ dest: path.join(__dirname, "uploads/") });

// Async JSON helpers
const loadJson = async (file) =>
  JSON.parse(await fs.promises.readFile(path.join(__dirname, file), "utf8"));

const saveJson = async (file, data) =>
  await fs.promises.writeFile(
    path.join(__dirname, file),
    JSON.stringify(data, null, 2),
    "utf8"
  );

// Example route
app.get("/api/videos", async (req, res) => {
  try {
    const data = await loadJson("videos.json");
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to load videos." });
  }
});

// Add more routes here (e.g., auth, upload, moderation, etc.)

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
