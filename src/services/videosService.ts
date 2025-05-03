import Video from '../models/Video';

export const getAll = async () => {
  return await Video.find();
};

export const getById = async (id: string) => {
  return await Video.findById(id);
};

export const create = async (data: any) => {
  const item = new Video(data);
  return await item.save();
};

export const remove = async (id: string) => {
  return await Video.findByIdAndDelete(id);
};
