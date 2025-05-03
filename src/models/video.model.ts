import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  thumbnail: { type: String, required: true },
  user: { type: String, required: true },
  createdAt: { type: String, required: true },
  views: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Video', VideoSchema);
