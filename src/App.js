// eslint-disable-next-line
import React, { useState } from "react";
import "./App.css";
import proto from "./pb/proto_grpc_web_pb"

var holaService = new proto.HolaServiceClient('http://0.0.0.0:8000');

function App(){
  const [info, setInfo] = useState(0)

  function takeCliente(){
    var request = new proto.HolaRequest();
    request.setMessage("Hola desde react");
    var metadata = {};
    holaService.hola(request, metadata, function(err, response) {
      if (err) {
        console.log(err.code, err.message);
      } else {
        console.log(response.getMessage());
        setInfo(response.getMessage());
      }
    });
  }

  return(
    <div className="App">
      <h1> Hello, World! {info}</h1>
      <button href="#" onClick={takeCliente}>Clickeame</button>
    </div>
  );
}

export default App;