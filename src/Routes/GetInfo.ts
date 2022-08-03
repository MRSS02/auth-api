import { Request, Response } from 'express';

export function GetInfo(req: Request, res: Response) {
    try {
      const name: string = req.body.user.name;
      const age: string = req.body.user.age;
      const createdAt: string = req.body.user.createdAt;
      res.status(200);
      res.send({ name, age, createdAt});
    } catch {
      res.status(500);
      res.send("Internal Server Error");
    }
 
}
