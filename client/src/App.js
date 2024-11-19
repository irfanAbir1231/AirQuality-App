// client/src/App.js

import React, { useState } from 'react';
import './App.css';
import AirQuality from './components/AirQuality';

function App() {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city) {
      setError('Please enter a city name');
      return;
    }
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}?city=${city}`);
      const data = await response.json();
      
      if (data.error) {
        setError('Error: ' + data.error.info);
      } else {
        setError('');
      }
    } catch (error) {
      setError('Failed to fetch air quality data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Air Quality Monitoring System</h1>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} 
        placeholder="Enter city name" 
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Display Air Quality data if available */}
      <AirQuality city={city} />
    </div>
  );
}

export default App;
