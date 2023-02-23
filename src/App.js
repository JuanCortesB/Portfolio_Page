
import './App.css';
import NavBar from './components/NavBar';
import Banner from "./components/Banner.jsx"
import Skills from "./components/Skills.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">

    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
