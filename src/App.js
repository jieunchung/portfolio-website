import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function changeLighting() {
    setDarkMode(!darkMode);
  }

  return (
    <main className={`App text-[#222222] ${darkMode && "text-[#fbfbfd]"}`}>
      <Navbar darkMode={darkMode} />
      <Home darkMode={darkMode} light={changeLighting} />
      <About darkMode={darkMode} />
      <Work darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </main>
  );
}

export default App;
