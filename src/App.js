// eslint-disable-next-line
import React from "react";
import "./App.css";
/* import { Cliente, Producto, User, Subasta } from "./pb/subastas_pb"
 */
import { 
  ClienteServiceClient, 
  /* SubastaServiceClient, 
  ProductoServiceClient */  } from "./pb/subastas_grpc_web_pb"

export const client = new ClienteServiceClient("http://localhost:8000");
function App(){
  function takeCliente(){
    if(client !== undefined){
      console.log("hay cliente paraque no es undefined ahora", client)
      client.getCliente({id:"1"}, (e, r) => console.log(e, r))
    }else{
      console.log("no funciona")
    }
  }

  return(
    <div className="App">
      <h1> Hello, World! Anda por favor!!!</h1>
      <button href="#" onClick={takeCliente}>Clickeame</button>
    </div>
  );
}

export default App;