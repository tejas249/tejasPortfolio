import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-white text-gray-900 antialiased">

      {/* Page Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <Navbar />

        {/* Add spacing between each section */}
        <section className="py-20">
          <Hero />
        </section>

        <section className="py-20">
          <Technologies />
        </section>

        <section className="py-20">
          <Projects />
        </section>

        <section className="py-20">
          <Contact />
        </section>

      </div>

    </div>
  );
};

export default App;
