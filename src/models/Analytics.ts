import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  event: { type: String, enum: ['view', 'like', 'comment', 'share'], required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Analytics', analyticsSchema);
