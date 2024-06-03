const express = require('express');
const router = express.Router();

const Location = require('./location');


// to send data: post method 
router.post('/locations', async (req, res) => {
    try{
        const locations =  req.body.locations;
        if(!Array.isArray(locations)){
            return res.status(400).json({error: 'Enter proper data' });
        }

        const savedLocations = await Location.insertMany(locations);
        res.status(201).json(savedLocations);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});




// to read the data: get method 
router.get('/locations', async (req, res) => {
    try {
        const locations = await Location.find();
        res.status(200).json(locations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
