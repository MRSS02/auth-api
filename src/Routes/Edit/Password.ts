import { Request, Response } from 'express';
import { UserModel } from '../../dbconfig';
import bcrypt from 'bcrypt';

export async function EditPassword(req: Request, res: Response) {
  if (req.body.age) {
    try {
      const hash = await bcrypt.hash(req.body.password, 10);
      await UserModel.updateOne({name: req.body.user.name}, {$set: {password: hash}});
      res.status(200);
      res.send("Sucessfully updated password.");
    } catch {
      res.status(500);
      res.send("Internal Server Error.");
    }
  } else {
    res.status(400);
    res.send("Invalid request body."); 
  }

}
