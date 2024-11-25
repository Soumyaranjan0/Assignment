import './styles/style.css';
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Section1 from "./components/Section_1";
import Section2 from './components/Section_2';
import Section3 from './components/Section_3';
import Section4 from './components/Section_4';
import Section5 from './components/Section_5';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Community />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;


