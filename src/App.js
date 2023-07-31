import './App.css';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services/>
      <Contact />
    </div>
  );
}

export default App;
