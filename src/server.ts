import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import { Router } from './Routes/Router';
import { Authorization } from './middleware/cookieJwtAuth';
import cookieParser from 'cookie-parser';

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use('/', Router);
const port = process.env.PORT || 3000;

if (process.env.JWT_SECRET === undefined) throw "JWT secret is not defined";

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});


