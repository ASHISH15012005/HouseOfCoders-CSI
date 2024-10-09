import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HackathonInfo from './components/HackathonInfo';
import Timeline from './components/Timeline';
import { GoogleGeminiEffectDemo } from './components/GeminiEffect';
import Sponsers from './components/Sponsers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <GoogleGeminiEffectDemo />
      <HackathonInfo />
      <Timeline />
      <Sponsers />
      <Footer />
    </div>
  );
}





export default App;
