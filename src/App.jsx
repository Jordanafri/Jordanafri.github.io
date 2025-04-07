import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; // Import Projects page
import Contact from "./pages/Contact"; // Import Contact page
import NotFound from "./pages/NotFound";
import Footer from './components/Footer'; 
import "./App.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  return (
    <Router>
      <Navbar />
      <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade" key={window.location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> {/* Add route for Projects */}
        <Route path="/contact" element={<Contact />} /> {/* Add route for Contact */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </CSSTransition>
      </TransitionGroup>
      <Footer />  {/* Add Footer */}
    </Router>
  );
}

export default App;
