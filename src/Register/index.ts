import { Request, Response } from 'express';
import mongo from 'mongodb';
import { client } from '../dbconfig';
import { User } from '../types'

export async function Register(req: Request, res: Response) {
   try {
      await client.connect();
      const database = await client.db(process.env.dbname);
      const user: User = { 
        name: req.body.user,
        password: req.body.password,
        id: new mongo.ObjectID().toString(),
      };

      console.log(user);
      await database.collection("users").insertOne(user);
      
      res.status(200);
      res.send("Register sucessful");
   } catch {
      res.status(500);
      res.send("Connection Error");

   }
   
};
