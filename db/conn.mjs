import * as dotenv from "dotenv";
dotenv.config()

//import pkg from 'mongodb';
import {MongoClient} from "mongodb";

const client = new MongoClient (process.env.URI) 

let conn; 
try {
    conn = await client.connect();
} catch (error) {
    console.error(error);
}

let db = conn.db("sample_mflix");


export default db;