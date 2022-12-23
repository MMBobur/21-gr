import React from 'react';
import './App.css';
import Stuvet from './pages/Sutufe';
import Navbar from './asilbek/Navbar/Navbar';
import Home from './asilbek/Home/Home';
import Animals from './asilbek/Animals/Animals';
import Footer from "./footer";
import Instagram from "./instagram";
import Simple from "./Simple";

function App() {
  return (
    <>
      <Stuvet/>
      <Navbar />
      <Home />
      <Animals />
      <Simple/>
      <Instagram/>
      <Footer/>
    </>
  );
}

export default App;
