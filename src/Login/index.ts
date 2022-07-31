import { Request, Response } from 'express';
import { client } from '../dbconfig';
import { User } from '../types';

export async function Login(req: Request, res: Response) {
   await client.connect();
   const database = await client.db(process.env.dbname);
   const user = await database.collection("users").findOne({
     name: req.body.name
   });

   console.log(user);

   // if (user.password === req.body.password) {
      
   // }

};


