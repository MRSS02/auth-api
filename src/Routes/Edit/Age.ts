import { Request, Response } from 'express';
import { UserModel } from '../../dbconfig';

export async function EditAge(req: Request, res: Response) {
  if (req.body.age) {
    try {
      await UserModel.updateOne({name: req.body.user.name}, {$set: {age: req.body.age}});
      res.status(200);
      res.send("Sucessfully updated age.");
    } catch {
      res.status(500);
      res.send("Internal Server Error.");
    }
  } else {
    res.status(400);
    res.send("Invalid request body."); 
  }
}
