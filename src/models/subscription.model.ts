import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema({
  subscriber: { type: String, required: true },
  subscribedTo: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  status: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model('Subscription', SubscriptionSchema);
