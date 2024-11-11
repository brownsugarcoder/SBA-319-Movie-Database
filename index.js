const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
const dbURI = "mongodb+srv://shavondhoward:PerScholas0317@mongopractice.yq9jv.mongodb.net/?retryWrites=true&w=majority&appName=Sample_mflix";



//const DATABASENAME= sample_mflix 





app.listen(27017,()=> {
    mongoose.connect(dbURI)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Connection failed:', error));

    }
)

  
// Start the server
//const PORT = process.env.PORT || 27017;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res ) => {
    res.send ('SBA 319 Testing 123');
}); 