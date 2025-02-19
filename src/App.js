
import './App.css';
import AboutMe from './components/AboutMe';
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
    </Container>
    
    </>
  );
}

export default App;
