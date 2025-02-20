
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact/Contact';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
    <Navbar/>
    <Container>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </Container>
    
    </>
  );
}

export default App;
