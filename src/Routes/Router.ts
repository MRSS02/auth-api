import express, { Request, Response, NextFunction } from 'express';
import { Login } from './Login';
import { Register } from './Register';
export const Router = express.Router();

Router.route('/login').post(Login);

Router.route('/register').post(Register);
