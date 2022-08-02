import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET || "";

interface JwtPayload {
  id: string
}

export const Authorization = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.status(403);
    res.send("Unauthorized");
  }
  try {
    const data = jwt.verify(token, secret) as JwtPayload;
    console.log(data)
    req.body.userId = data.id;
    return next();
  } catch {
    res.status(403);
    res.send("Unauthorized");

  }
};
