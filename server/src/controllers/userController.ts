import { NextFunction, Request, Response } from "express";
import User, { IUser } from "../models/user";
import passport from "passport";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username });
    await User.register(user, password);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: `Failed to register user${error}` });
  }
};

export const userLogin = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (err:any, user:any, info:any) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: info.message });

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({ message: 'Login successful', user });
    });
  })(req, res, next);
};

