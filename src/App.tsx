import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './inquiey/WhatsAppButton'; // Import the WhatsAppButton component
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <WhatsAppButton /> {/* Add the WhatsAppButton component */}
        <Toaster position="top-right" reverseOrder={false} />
      </main>
      <Footer />
    </div>
  );
}

export default App;