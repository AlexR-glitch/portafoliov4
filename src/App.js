import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Menu from "./components/navbar/Menu";

import Footer from "./components/footer/Footer";

import Home from "./pages/landing/Home";

import About from "./pages/about/About";

import Portafolio from "./pages/portafolio/Portafolio";

import Fotografia from "./pages/fotografia/Fotografia";

import Diseño from "./pages/diseño/Diseño";

export default function App(){
  return(
    <>
    <Router>
      <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/fotografia" element={<Fotografia />} />
          <Route path="/diseno" element={<Diseño />} />
        </Routes>
      <Footer />
    </Router>
    </>
  )
}