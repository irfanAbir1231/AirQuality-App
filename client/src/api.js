import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchAirQuality = (lat, lon) =>
    API.get('/api/air-quality', { params: { lat, lon } });
