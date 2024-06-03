const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./api');

const app = express();

app.use(bodyParser.json()); // to handle form middleware 

mongoose.connect('mongodb://localhost:27017/locationdb')
    .then(() => console.log('MongoDB connected')) 
    .catch(err => console.log(err));


    // use routes 
app.use('/api', apiRoutes)

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));