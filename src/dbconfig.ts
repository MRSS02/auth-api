import { MongoClient } from 'mongodb';
import 'dotenv/config';

const uri:string = process.env.DBURL || "mongodb://localhost:3000";
export const client = new MongoClient(uri)
