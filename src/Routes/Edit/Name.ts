import { Request, Response } from 'express';
import { UserModel } from '../../dbconfig';

export async function EditName(req: Request, res: Response) {
  if (req.body.name) {
    try {
      await UserModel.updateOne({name: req.body.user.name}, {$set: {name: req.body.name}});
      res.status(200);
      res.send("Sucessfully updated name.");
    } catch {
      res.status(500);
      res.send("Internal Server Error.");
    }
  } else {
    res.status(400);
    res.send("Invalid request body."); 
  }

}
