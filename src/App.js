import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
