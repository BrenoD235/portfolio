import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import { Toaster } from "./components/ui/toaster";

import minhaFoto from "./assets/Foto.png";

const Divider = ({ from, to }) => (
  <div style={{
    height: "15px",
    background: `linear-gradient(to bottom, ${from}, ${to})`,
  }} />
);

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen">
      {showIntro && (
        <Intro
          imageSrc={minhaFoto}
          onEnter={() => setShowIntro(false)}
        />
      )}

      <div style={{ opacity: 1 }}>
        <Header />
        <main>
          <Hero />
          <Divider from="#131314" to="#252526" />
          <About />
          <Divider from="#252526" to="#131314" />
          <Skills />
          <Divider from="#131314" to="#252526" />
          <Contact />
          <Divider from="#252526" to="#1b1a1f" />
        </main>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;