import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['new_video', 'comment', 'reply', 'like', 'subscription'], required: true },
  content: { type: String, required: true },
  video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  fromUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  read: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Notification', notificationSchema);
