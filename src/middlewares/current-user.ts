import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface UserPayload {
  id: string;
  email: string;
}

// Add currentUser interface to express request object
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.jwt) {
    return next();
  }

  const JWT_SECRET_KEY = process.env.JWT_KEY;
  try {
    const payload = jwt.verify(req.session?.jwt, JWT_SECRET_KEY!) as UserPayload;
    req.currentUser = payload;
  } catch (err) {}
  return next();
};
