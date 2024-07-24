import { Request, Response } from 'express';
import State from '../models/state';

export const createState = async (req: Request, res: Response) => {
  const { name, description, status, createdBy } = req.body;

  const newState = new State({
    name,
    description,
    status,
    createdBy,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  try {
    const savedState = await newState.save();
    res.status(201).json(savedState);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create state' });
  }
};

// Similarly, add updateState, deleteState, and getState functions
