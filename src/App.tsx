import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Videos from './components/sections/Videos';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Projects />
        <Videos />
        <Skills />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;