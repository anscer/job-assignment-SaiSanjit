import { Request, Response } from 'express';
import User from '../models/user';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username });
    await User.register(user, password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};
