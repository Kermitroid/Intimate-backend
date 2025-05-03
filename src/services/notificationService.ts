import Notification from '../models/Notification';

export const createNotification = async (data: any) => {
  return Notification.create(data);
};

export const getNotificationsForUser = async (userId: string) => {
  return Notification.find({ recipient: userId }).sort({ createdAt: -1 }).populate('fromUser').limit(50);
};

export const markAsRead = async (notificationId: string, userId: string) => {
  return Notification.findOneAndUpdate({ _id: notificationId, recipient: userId }, { read: true }, { new: true });
};
