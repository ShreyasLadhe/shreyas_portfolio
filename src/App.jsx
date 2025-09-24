import { useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Experiences from './sections/Experiences';
import Testimonial from './sections/Testimonial';
import Solutions from './sections/Solutions';
import CloudContributions from './sections/CloudContributions';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Analytics />
      <SpeedInsights />
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work">
        <Projects />
      </section>

      <section id="experiences">
        <Experiences />
      </section>

      <section id="solutions">
        <Solutions />
      </section>

      <section id="testimonial">
        <Testimonial />
      </section>

      <section id="cloud-contributions">
        <CloudContributions />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;
