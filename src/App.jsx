// App.jsx (ou App.js)
import React from "react";
import { GlobalStyle } from './globalStyles';  // arquivo com createGlobalStyle
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <>
      <GlobalStyle />   {/* Estilo global com scroll suave */}
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
