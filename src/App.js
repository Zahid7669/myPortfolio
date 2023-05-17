import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './assets/styles/App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
         <Header /> 
        <Routes>
           <Route exact path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/contact" element={<Contact />} />
         </Routes>
         <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
