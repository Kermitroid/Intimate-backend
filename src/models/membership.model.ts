import mongoose from 'mongoose';

const MembershipSchema = new mongoose.Schema({
  user: { type: String, required: true },
  tier: { type: String, required: true },
  benefits: { type: String, required: true },
  price: { type: String, required: true },
  createdAt: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Membership', MembershipSchema);
