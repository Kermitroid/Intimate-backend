import mongoose from 'mongoose';

const TipSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  receiver: { type: String, required: true },
  amount: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Tip', TipSchema);
