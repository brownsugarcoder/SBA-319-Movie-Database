
import express from 'express';
import db from "../db/conn.mjs";
import pkg from 'mongodb'; 
const { ObjectId } = pkg;
//import {ObjectId, objectId} from "mongodb";
//const { ObjectId } = pkg;
const router = express.Router();


// Create route to populate 20 samples
router.post("/", async (reg,res) => {
  let collection = await db.collection ("movies");
  let newDocument = req.body;
  let result = await collection.insertMany(newDocument);
  res.send(result).status(204);
  
})

// Single entry
router.get("/movies/:id", async (req,res) => {
  let collection = await db.collection ("movies");
  let query = { _id: new ObjectId(req.params.id)} ;
  let result = await collection.findOne(query);

  if (!result) res.send ("Not found").status (404);
  else res.send(result).status(200);
})


//Patch (update)
router.patch("/movies/:id", async (req, res) =>{
let collection = await db.collection ("movies");
let query = { _id: new ObjectId(req.params.id)} ;
let result = await collection.findOne(query);

});

//Remove
router.patch("/movies/:id", async (req, res) =>{
let collection = await db.collection ("movies");
let query = { _id: new ObjectId(req.params.id)} ;

let result = await collection.deleteOne(query);

});

//Delete
router.delete("/movies/:id", async (req, res) =>{
  let collection = await db.collection ("movies");
  let query = { _id: new ObjectId(req.params.id)} ;
  let result = await collection.deleteOne(query);

});














export default router;









/* // READ all movies
router.get('/', async (req, res) => {
    try {
      const movies = await Movie.find(); 
      res.json(movies); 
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  // READ a movie by ID
    router.get('/:id', async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) return res.status(404).send('Movie not found');
      res.send(movie);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

// CREATE a new movie
router.post('/', async (req, res) => {
    try {
      const movie = new Movie(req.body);
      await movie.save();
      res.status(201).send(movie);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  
*/









 