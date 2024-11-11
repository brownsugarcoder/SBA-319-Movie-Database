const mongoose = require('mongoose');

// Define the schema for a Movie
const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  awards: { type: Number, default: 0 }
});

// Create the Movie model
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
