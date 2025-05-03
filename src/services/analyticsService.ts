import Analytics from '../models/Analytics';

export const logEvent = async (data: any) => {
  return Analytics.create(data);
};

export const getVideoAnalytics = async (videoId: string) => {
  return Analytics.aggregate([
    { $match: { video: videoId } },
    { $group: { _id: "$event", count: { $sum: 1 } } }
  ]);
};

export const getSiteMetrics = async () => {
  return Analytics.aggregate([
    { $group: { _id: "$event", count: { $sum: 1 } } }
  ]);
};
