import User from '../models/User';

export const getAll = async () => {
  return await User.find();
};

export const getById = async (id: string) => {
  return await User.findById(id);
};

export const create = async (data: any) => {
  const item = new User(data);
  return await item.save();
};

export const remove = async (id: string) => {
  return await User.findByIdAndDelete(id);
};
