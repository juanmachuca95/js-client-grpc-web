// eslint-disable-next-line
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Subasta from "./Subastas/Subasta";
import JoinSubasta from "./Subastas/JoinSubasta";



function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Subasta />} />
        <Route path="/joinsubasta/:id" element={<JoinSubasta />} />
      </Routes>
    </div>
  );
}

export default App;