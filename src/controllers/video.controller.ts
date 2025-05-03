import { Request, Response } from 'express';
import Video from '../models/Video';

export const getAllVideos = async (req: Request, res: Response) => {
  try {
    const videos = await Video.find().populate('userId', 'username');
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
};

export const uploadVideo = async (req: Request, res: Response) => {
  const { title, description, videoUrl, thumbnailUrl } = req.body;
  try {
    const video = await Video.create({
      title,
      description,
      videoUrl,
      thumbnailUrl,
      userId: req.user.id
    });
    res.status(201).json(video);
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload video' });
  }
};
