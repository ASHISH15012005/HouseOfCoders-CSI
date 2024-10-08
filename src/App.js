import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HackathonInfo from './components/HackathonInfo';
import Timeline from './components/Timeline';
import { GoogleGeminiEffectDemo } from './components/GeminiEffect';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <GoogleGeminiEffectDemo /> */}
      <HackathonInfo />
      <Timeline />
    </div>
  );
}

export default App;
