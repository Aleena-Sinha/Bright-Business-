import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Programs from './components/Programs';
import Insights from './components/Insights';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-bright-yellow selection:text-bright-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Programs />
        <Clients />
        <Insights />
        <Resources />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

