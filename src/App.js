// eslint-disable-next-line
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Subasta from "./Subasta";


function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Subasta />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;