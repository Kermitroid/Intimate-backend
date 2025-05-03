import { Request, Response } from 'express';
import Comment from '../models/Comment';

export const getCommentsByVideo = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find({ videoId: req.params.videoId }).populate('userId', 'username');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};
export const addComment = async (req: Request, res: Response) => {
  const { videoId, content } = req.body;
  try {
    const comment = await Comment.create({
      videoId,
      content,
      userId: req.user.id,
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: 'Comment not found' });
    if (comment.userId.toString() !== req.user.id) return res.sendStatus(403);
    await comment.deleteOne();
    res.json({ message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete comment' });
  }
};
