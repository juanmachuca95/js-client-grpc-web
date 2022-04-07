// eslint-disable-next-line
import React from "react";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import Subasta from "../Subastas/Subasta";
import JoinSubasta from "../Subastas/JoinSubasta";
import useToken from './useToken';

function App(){
  const { token, setToken } = useToken();

  if(!token){
    return <Login setToken={setToken} />
  }

  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<Subasta />} />
        <Route path="/joinsubasta/:id" element={<JoinSubasta />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;