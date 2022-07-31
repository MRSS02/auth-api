import { Request, Response } from 'express';
import { UserModel } from '../dbconfig';
import { User } from '../User';

//todo: actual authentication
export async function Login(req: Request, res: Response) {
  if (!req.body.name || !req.body.password) {
  const token = undefined;  
  try {
    if (!token) {
      const foundUser = UserModel.findOne({ name: req.body.name })
      console.log(foundUser);
      if (foundUser) {
        if (foundUser.password == req.body.password) {
          res.status(200);
          res.send("User found and password matches")
        } else {
          res.status(401);
          res.send("Invalid Password");
        }
      } else {
        res.status(404);
        res.send("User not found")
      }
    }
  } catch {
    res.status(500);
    res.send("Connection Error");
  }
  } else {
    res.status(400);
    res.send("Invalid request body");
  }
};


