import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Experience from './components/pages/ExperienceTesteSK';
import Experience from './components/pages/Experience';
import AboutMe from './components/pages/AboutMe';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* para a versão utilizada do react-router que é a v.6 se utiliza outra sintaxe para renderizar às páginas */}
        <Route exact path='/' element={<Home />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/experience' element={<Experience />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
