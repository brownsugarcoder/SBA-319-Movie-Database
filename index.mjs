
import express from 'express';
import dotenv from 'dotenv';
import movies from "./routes/movies.mjs";
import comments from "./routes/comments.mjs";
import users from "./routes/users.mjs";



dotenv.config();
const app = express();

//const moviesRouter = require('./routes/movies.mjs');
const port = 3007;

//route usage
app.use('/movie', movies);
app.use('/comments', comments);
app.use('/users', users);



// Middleware to parse JSON
app.use(express.json());

app.get("/", (req,res) =>{ 
    res.send("hello there")
});

app.listen(port,() => { 
    console.log (`server is listening on port ${port}`)
});

