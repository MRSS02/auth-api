import mongoose, { Schema } from 'mongoose';
import 'dotenv/config';

const uri:string = process.env.DBURI || "mongodb://localhost:27017/myapp";
mongoose.connect(uri);
const Connection = mongoose.connection;  

const UserSchema = new Schema({
  name: String,
  password: String,
  age: Number,
  createdAt: Date,
  
})

export const UserModel = Connection.model('user', UserSchema);
