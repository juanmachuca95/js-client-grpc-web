import React, { useState } from 'react'
import proto from "./pb/proto_grpc_web_pb"

var subastaService = new proto.SubastaServiceClient('http://0.0.0.0:8000');


export default function Subasta() {
    const [subastas, setSubastas] = useState([])


    function getSubastas(){
        var request = new proto.Empty();
        var metadata = {};
        subastaService.getSubastas(request, metadata, function(err, response) {
          if (err) {
            console.log(err.code, err.message);
          } else {
            console.log(response.getSubastasList());
            setSubastas(response.getSubastasList())
          }
        });
    }
    


    return (
        <>
            <h1> Subastas! {subastas}</h1>



            <button onClick={getSubastas}>Clickeame</button> 
            <div>Subasta</div>
        </>
    )
}
