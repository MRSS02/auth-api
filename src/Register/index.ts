import { Request, Response } from 'express';
import { User } from '../User';


export async function Register(req: Request, res: Response) {
   if (!req.body.name || !req.body.password) {
   try {
      const NewUser = new User(req.body.name, req.body.password, req.body.age);
      NewUser.create();
      res.status(200);
      res.send("Register sucessful");
   } catch {
      res.status(500);
      res.send("Connection Error");

   }
   } else {
     res.status(400);
     res.send("Invalid request body.");
   }
   
};
