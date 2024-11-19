// server/routes/airQuality.js

const express = require('express');
const axios = require('axios');

const router = express.Router();

// Route to get air quality data based on city
router.get('/', async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ message: "City name is required" });
    }

    const apiKey = process.env.WEATHERSTACK_API_KEY;
    const url = `https://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch air quality data' });
    }
});

module.exports = router;
