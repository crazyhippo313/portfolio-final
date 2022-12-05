import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
export default function App() {
  return (
    <main className="text-black body-font">
      <Navbar/>
      <About/>
      <Projects/>
    </main>
  );
}
