import express from 'express';
import db from "../db/conn.mjs";
import pkg from 'mongodb'; 
const { ObjectId } = pkg;

const router = express.Router();


// Create route to populate 20 samples
router.post("/", async (req,res) => {
    let collection = await db.collection ("comments");
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
    
  })
  
  // Single entry
  router.get("/:id", async (req,res) => {
    let collection = await db.collection ("comments");
    let query = { _id: new ObjectId(req.params.id)} ;
    let result = await collection.findOne(query);
  
    if (!result) res.send ("Not found").status (404);
    else res.send(result).status(200);
  })











































export default router;