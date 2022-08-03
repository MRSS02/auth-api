import { Request, Response } from 'express';
import 'dotenv/config';
import { UserModel } from '../dbconfig';
import { User } from '../User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || "";

//todo: actual authentication
export async function Login(req: Request, res: Response) {
  if (req.body.name && req.body.password) {
  const token = req?.cookies.token;  
    try {
      if (!token) {
        const foundUser = await UserModel.findOne({ name: req.body.name });
        if (foundUser) {
          const passwordMatches = await bcrypt.compare(req.body.password, foundUser.password);
          if (passwordMatches) {
            const token = jwt.sign(foundUser.toJSON(), secret, { expiresIn: "1h" });
            res.cookie("token", token, {
              httpOnly: true,
            })
            res.status(200);
            res.send(`Successfully logged in.`);
          } else {
            res.status(401);
            res.send("Invalid Password");
          }
        } else {
          res.status(404);
          res.send("User not found");
        }
      } else {
        res.status(405);
        res.send("Already logged in!");
      }
    } catch (e) {
      res.status(500);
      res.send("Internal Server Error");
    }
  } else {
    res.status(400);
    res.send("Invalid request body");
  }
};


