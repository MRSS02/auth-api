import { Request, Response } from 'express';

export function Logout(req: Request, res: Response) {
  const token = req?.cookies.token;
  if (token) {
    res.clearCookie("token");
    res.status(200);
    res.send("Successfully logged out.");
  } else {
    res.status(409);
    res.send("You aren't logged in.");

  }
}
