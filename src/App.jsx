import { GlobalStyle } from './globalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
