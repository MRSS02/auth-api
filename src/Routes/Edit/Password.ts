import { Request, Response } from 'express';
import { UserModel, secret } from '../../dbconfig';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import jwt from 'jsonwebtoken';

export async function EditPassword(req: Request, res: Response) {
  if (req.body.age) {
    try {
      const user = req.body.user;
      const hash = await bcrypt.hash(req.body.password, 10);
      await UserModel.updateOne({name: user.name}, {$set: {password: hash}});
      const foundUser = await UserModel.findOne({ name: user.name });
      const token = await jwt.sign(foundUser.toJSON(), secret, { expiresIn: "1h" });
      res.cookie("token", token, {
              httpOnly: true,
            })
      res.status(200);
      res.send("Sucessfully updated password.");
    } catch(e) {
      console.log(e);
      res.status(500);
      res.send("Internal Server Error.");
    }
  } else {
    res.status(400);
    res.send("Invalid request body."); 
  }

}
