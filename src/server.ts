import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import { Login } from './Login';
import { Register } from './Register';


const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const port = process.env.PORT || 3000;

app.post('/login', Login);

app.post('/register', Register);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});


