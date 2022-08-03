import { Request, Response } from 'express';
import { UserModel } from '../dbconfig';

export async function Delete(req: Request, res: Response) {
  try {
    await UserModel.deleteOne({name: req.body.user.name});
    res.clearCookie("token");
    res.status(200);
    res.send("Sucessfully deleted user.");
  } catch {
    res.status(500);
    res.send("Internal Server Error.");
  }
}
