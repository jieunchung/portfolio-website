import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  return (
    <div className="App text-[#222222]">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
