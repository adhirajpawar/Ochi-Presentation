import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marrquee from './components/Marrquee';
import About from './components/About';
import Eyes from './components/Eyes';


function App() {
  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marrquee />
      <About />
      <Eyes />
    </div>
  )
}

export default App;