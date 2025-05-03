import Report from '../models/Report';
import User from '../models/User';

export const createReport = async (data: any) => {
  return Report.create(data);
};

export const getReports = async () => {
  return Report.find().sort({ createdAt: -1 }).populate('reporter reportedUser reportedVideo');
};

export const resolveReport = async (id: string, status: 'resolved' | 'dismissed') => {
  return Report.findByIdAndUpdate(id, { status }, { new: true });
};

export const banUser = async (userId: string) => {
  return User.findByIdAndUpdate(userId, { banned: true }, { new: true });
};
