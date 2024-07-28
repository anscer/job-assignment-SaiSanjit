import { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/user';

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  console.log("inside authentication");
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
};

export const authorizeRoles = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {

    const user = req.user as IUser; 
    if (roles.some(role => user.roles.includes(role))) {
      return next();
    }

    return res.status(403).send('Forbidden'); 
  };
}