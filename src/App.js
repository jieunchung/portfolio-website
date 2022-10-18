import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Load from "./components/Load";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
  const [loaded, setLoaded] = useState(false);

  function load() {
    setTimeout(() => {
      setLoaded(true);
    }, 2800);
  }

  if (loaded) {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
    );
  } else load();
  return <Load />;
}

export default App;
