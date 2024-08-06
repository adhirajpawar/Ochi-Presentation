import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marrquee from './components/Marrquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Features from './components/Features';
import Cards from './components/Cards';
import Footer from './Footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marrquee />
      <About />
      <Eyes />
      <Features />
      <Cards />
      <Footer />

    </div>
  )
}

export default App;