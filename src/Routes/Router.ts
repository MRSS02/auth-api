import express from 'express';
import { GetInfo } from './GetInfo';
import { Login } from './Login';
import { Register } from './Register';
import { Logout } from './Logout';
import { EditName } from './Edit/Name';
import { EditAge } from './Edit/Age';
import { EditPassword } from './Edit/Password';
import { Delete } from './Delete';
import { Authorization } from '../middleware/cookieJwtAuth';

export const Router = express.Router();

Router.route('/info').get(Authorization, GetInfo);

Router.route('/login').post(Login);

Router.route('/register').post(Register);

Router.route('/logout').post(Logout);

Router.route('/edit/name').post(Authorization, EditName);

Router.route('/edit/age').post(Authorization, EditAge);

Router.route('/edit/password').post(Authorization, EditPassword);

Router.route('/delete').post(Authorization, Delete);
