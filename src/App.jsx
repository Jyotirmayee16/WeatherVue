import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import WeatherDisplay from './Components/WeatherDisplay';

const App = () => {
  const [location, setLocation] = useState('');

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>WeatherVue App</h1>
      </header>
      <main className="App-main">
        <SearchBar onLocationChange={handleLocationChange} />
        {location && <WeatherDisplay location={location} />}
      </main>
      </div>
  );
};

export default App;