import { Request, Response } from 'express';
import { User } from '../User';
import { UserModel } from '../dbconfig';
import bcrypt from 'bcrypt';

export async function Register(req: Request, res: Response) {
   if (req.body.name && req.body.password) {
     const token = req?.cookies.token;
     if (!token) {
       try {
          const hash = await bcrypt.hash(req.body.password, 10);
          const NewUser = new User(req.body.name, hash, req.body.age);
          const foundUser = await UserModel.findOne({ name: req.body.name })
          if (foundUser) {
            res.status(409);
            res.send("User already exists!");
          } else {
            NewUser.create();
            res.status(201);
            res.send("Register sucessful.");
          }
        } catch(e) {
          console.log(e);
          res.status(500);
          res.send("Internal Server Error.");
        }
     } else {
       res.status(405);
       res.send("Already logged in!");
     }
   } else {
     res.status(400);
     res.send("Invalid request body.");
   }
   
};
