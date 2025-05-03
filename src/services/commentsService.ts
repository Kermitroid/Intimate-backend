import Comment from '../models/Comment';

export const getAll = async () => {
  return await Comment.find();
};

export const getById = async (id: string) => {
  return await Comment.findById(id);
};

export const create = async (data: any) => {
  const item = new Comment(data);
  return await item.save();
};

export const remove = async (id: string) => {
  return await Comment.findByIdAndDelete(id);
};
