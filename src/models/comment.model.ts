import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  video: { type: String, required: true },
  user: { type: String, required: true },
  text: { type: String, required: true },
  createdAt: { type: String, required: true },
  likes: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Comment', CommentSchema);
