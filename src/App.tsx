import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Services />
        <About />
        <ContactForm />
        <Footer />
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=+919163366529"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 z-50"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </>
  );
}

export default App;
