import { Request, Response } from 'express';
import { User } from '../User';
import { UserModel } from '../dbconfig';
import bcrypt from 'bcrypt';


export async function Register(req: Request, res: Response) {
   if (req.body.name && req.body.password) {
     try {
       
        const hash = await bcrypt.hash(req.body.password, 10);
        const NewUser = new User(req.body.name, hash, req.body.age);
        const foundUser = await UserModel.findOne({ name: req.body.name })
        console.log(foundUser);
        if (foundUser) {
          res.status(409);
          res.send("User already exists!");
        } else {
          NewUser.create();
          res.status(200);
          res.send("Register sucessful");
        }
     } catch {
        res.status(500);
        res.send("Connection Error");
     }
   } else {
     res.status(400);
     res.send("Invalid request body.");
   
   }
   
};
