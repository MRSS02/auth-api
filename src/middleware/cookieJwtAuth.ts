import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET || "";

interface JwtPayload {
  id: string
}

export const Authorization = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401);
    res.send("Unauthorized.");
  }
  try {
    const user = jwt.verify(token, secret) as JwtPayload;
    req.body.user = user;
    return next();
  } catch {
    res.status(401);
    res.send("Unauthorized.");

  }
};
