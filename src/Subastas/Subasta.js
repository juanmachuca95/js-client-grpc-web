import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react'
import SubastasList from '../components/SubastasList';
import Layout from '../components/Layout/Layout';
import proto from "../pb/proto_grpc_web_pb"

var subastaService = new proto.SubastaServiceClient('http://0.0.0.0:8000');
export default function Subasta() {

  const [subastas, setSubastas] = useState([]);
  useEffect(() => {
    getSubastas();
  }, []);

  function getSubastas() {
    var request = new proto.Empty();
    var metadata = {};

    subastaService.getSubastas(request, metadata, (err, response) => {
      if (err) {
        console.log(err.code, err.message);
      } else {
        let subastasList = response.getSubastasList();
        /* console.log(response.getSubastasList()) */
        subastasList = subastasList.map((subasta) => {
          return {
            id: subasta.array[0],
            subasta: subasta.array[1],
            fecha: subasta.array[2],
            activo: subasta.array[3],
            created_at: subasta.array[4],
            updated_at: subasta.array[5]
          }
        })

        setSubastas(subastasList);
      }
    });
  }
    
  return (    
    <>
      <Layout>
        <Box sx={{ paddingTop: 2 }} >
          <SubastasList subastas={subastas} />
        </Box>
      </Layout>
    </>  
  )
}
