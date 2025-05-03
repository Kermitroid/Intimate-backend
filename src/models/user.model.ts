import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: true },
  bio: { type: String, required: true },
  createdAt: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
