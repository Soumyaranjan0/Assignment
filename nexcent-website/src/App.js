import './styles/style.css';
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Clients />
      <Community />
      <Footer />
    </div>
  );
}

export default App;


