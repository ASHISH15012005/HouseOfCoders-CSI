import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HackathonInfo from './components/HackathonInfo';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HackathonInfo />
      <Timeline />
    </div>
  );
}

export default App;
