import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Container, Grid, Typography } from '@mui/material';
import proto from '../pb/proto_grpc_web_pb';

var subastaService = new proto.SubastaServiceClient('http://0.0.0.0:8000');

export default function JoinSubasta(){
    const { id } = useParams();
    const [subasta, setSubasta] = useState({});

    function getSubasta() {
        var request = new proto.SubastaId();
        request.setId(id)
        var metadata = {};
    
        subastaService.getSubasta(request, metadata, (err, response) => {
          if (err) {
            console.log(err.code, err.message);
          } else {
            let subasta = {
                id: response.getId(),
                subasta: response.getSubasta(),
                fecha: response.getFecha(),
                activo: response.getActivo(),
                created_at: response.getCreatedAt(),
                updated_at: response.getUpdatedAt()
            }
            console.log(subasta)
            setSubasta(subasta);
          }
        });
      }

    useEffect(()=>{
        getSubasta();
    }, [])

    return (
        <>
            <Box sx={{ paddingTop: 4 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>      
                        <Typography variant="h1" fontSize={40} align="left">
                            {subasta.subasta}
                        </Typography>   
                        <Typography variant="h6" align="left">
                            {subasta.setId} - {subasta.created_at}
                        </Typography>           
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </>
    )
}
