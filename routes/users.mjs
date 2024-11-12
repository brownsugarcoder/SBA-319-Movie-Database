import express from 'express';
import db from "../db/conn.mjs";
import pkg from 'mongodb'; 
const { ObjectId } = pkg;
//import {ObjectId, objectId} from "mongodb";
//const { ObjectId } = pkg;
const router = express.Router();



// Create route to populate 20 samples
router.post("/", async (reg,res) => {
    let collection = await db.collection ("users");
    let newDocument = req.body;
    let result = await collection.insertMany(newDocument);
    res.send(result).status(204);
    
  })
  
  // Single entry
  router.get("/:id", async (req,res) => {
    let collection = await db.collection ("users");
    let query = { _id: new ObjectId(req.params.id)} ;
    let result = await collection.findOne(query);
  
    if (!result) res.send ("Not found").status (404);
    else res.send(result).status(200);
  })
  



// Create route to populate 20 samples
router.post("/", async (reg,res) => {
    let collection = await db.collection ("users");
    let newDocument = req.body;
    let result = await collection.insertMany(newDocument);
    res.send(result).status(204);
    
  })
  
  // Single entry
  router.get("/users/:id", async (req,res) => {
    let collection = await db.collection ("users");
    let query = { _id: new ObjectId(req.params.id)} ;
    let result = await collection.findOne(query);
  
    if (!result) res.send ("Not found").status (404);
    else res.send(result).status(200);
  })
  
  
  //Patch (update)
  router.patch("/musers/:id", async (req, res) =>{
  let collection = await db.collection ("users");
  let query = { _id: new ObjectId(req.params.id)} ;
  let result = await collection.findOne(query);
  
  });
  
  //Remove
  router.patch("/users/:id", async (req, res) =>{
  let collection = await db.collection ("users");
  let query = { _id: new ObjectId(req.params.id)} ;
  
  let result = await collection.deleteOne(query);
  
  });
  
  //Delete
  router.delete("/movies/:id", async (req, res) =>{
    let collection = await db.collection ("users");
    let query = { _id: new ObjectId(req.params.id)} ;
    let result = await collection.deleteOne(query);
  
  });
  



































export default router;