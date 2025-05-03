import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const register = async (data: any) => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = new User({ ...data, password: hashedPassword });
  return await user.save();
};

export const login = async ({ username, password }: { username: string, password: string }) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const payload = { id: user._id, username: user.username };
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
};
