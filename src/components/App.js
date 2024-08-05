import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import { username, city, bio, github, linkedin } from "./data/data.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home username={username} city={city} />
      <About bio={bio} github={github} linkedin={linkedin} />
    </div>
  );
}

export default App;