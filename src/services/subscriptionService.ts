import Subscription from '../models/Subscription';
import User from '../models/User';

export const subscribe = async (subscriberId: string, subscribedToId: string) => {
  if (subscriberId === subscribedToId) throw new Error("Cannot subscribe to yourself");
  await Subscription.create({ subscriber: subscriberId, subscribedTo: subscribedToId });
};

export const unsubscribe = async (subscriberId: string, subscribedToId: string) => {
  await Subscription.findOneAndDelete({ subscriber: subscriberId, subscribedTo: subscribedToId });
};

export const getSubscribers = async (userId: string) => {
  return Subscription.find({ subscribedTo: userId }).populate('subscriber');
};

export const getSubscriptions = async (userId: string) => {
  return Subscription.find({ subscriber: userId }).populate('subscribedTo');
};
