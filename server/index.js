// server/index.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const airQualityRoutes = require('./routes/airQuality');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/air-quality', airQualityRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
