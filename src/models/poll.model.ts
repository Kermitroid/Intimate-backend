import mongoose from 'mongoose';

const PollSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: String, required: true },
  votes: { type: String, required: true },
  createdAt: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Poll', PollSchema);
