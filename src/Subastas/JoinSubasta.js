import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Card, CardContent, Container, Grid, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import proto from '../pb/proto_grpc_web_pb';

var subastaService = new proto.SubastaServiceClient('http://0.0.0.0:8000');

export default function JoinSubasta(){
    const { id } = useParams();
    const [subasta, setSubasta] = useState({});
    const [subastaProductos, setSubastaProductos] = useState([]);
    const [productoActual, setProductoActual] = useState();
    const [rows, setRows] = useState([1, 159]);
    const [columns] = useState([
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'oferta', headerName: '$', width: 130 },
    ]);

    useEffect(()=>{
        getSubasta();
        getSubastaProductos();
        console.log(subastaProductos);
    }, [])


    useEffect(() => {
        getSubastaOfertas();
    }, [])


    const getSubastaOfertas = () => {
        console.log("called")
    
        /* var sensorRequest = new SensorRequest()
        var stream = client.tempSensor(sensorRequest,{})
    
        stream.on('data', function(response){
            setTemp(response.getValue())
        }); */
    };

    
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
            setSubasta(subasta);
          }
        });
    }

    function getSubastaProductos(){
        var request = new proto.SubastaId()
        request.setId(id)
        var metadata = {}

        subastaService.getSubastaProductos(request, metadata, (err, response) => {
            if(err){
                console.log(err.code, err.message)
            }else{
                let subastaProductosList = response.getSubastasProductosList();
                subastaProductosList = subastaProductosList
                    .map((subastaProducto) => {
                        return {
                            id: subastaProducto.array[0],
                            producto: {
                                productos_id: subastaProducto.array[1][0],
                                producto: subastaProducto.array[1][1],
                                descripcion: subastaProducto.array[1][2],
                                stock: subastaProducto.array[1][3],
                                precio_inicial: subastaProducto.array[1][4],
                                precio_aumento: subastaProducto.array[1][5],
                                precio_subasta: subastaProducto.array[1][6],
                                cliente: {
                                    cliente_id: subastaProducto.array[1][7][0],
                                    cliente: subastaProducto.array[1][7][1],
                                    cuit: subastaProducto.array[1][7][2],
                                    direccion: subastaProducto.array[1][7][3],
                                    ciudad: subastaProducto.array[1][7][4],
                                    iva: subastaProducto.array[1][7][5],
                                }
                            }
                        }
                    })

                setSubastaProductos(subastaProductosList);
                setProductoActual(1)
            }
        });
    }

    return (
        <>
            <Box sx={{ paddingTop: 4 }}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={6} align="left">      
                            <Box sx={{ paddingTop:5, paddingBottom:5 }}>
                                <Typography variant="h1" fontSize={40}>
                                    {subasta.subasta}
                                </Typography>        
                                <Typography variant="h5">
                                    Productos en subasta ({ subastaProductos.length})    
                                </Typography>    
                            </Box>

                            <TextField fullWidth id="outlined-basic" label="Ofertar" variant="outlined" />

                            <DataTableSubastaOfertas rows={rows} />
                        </Grid>

                        <Grid item xs={6}>  
                            <StepperListSubastaProductos subastaProductos={subastaProductos}/>
                        </Grid>
                    </Grid>

                         
                </Container>
            </Box>
        </>
    )
}


function StepperListSubastaProductos ({subastaProductos}){
    const listProductos = subastaProductos && subastaProductos.map((subastaproducto, i) => {
        console.log(subastaproducto.id)
        return <SubastaProductosCard {...subastaproducto}  key={subastaproducto.id}/>
    })

    return (
        <>   
            { listProductos }
        </>
    )

}


function SubastaProductosCard({producto}){
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    { producto.producto }
                </Typography>
                <Typography variant="h5" component="div">
                    { producto.producto.stock }
                </Typography>
            </CardContent>
        </Card>
    )
}


function DataTableSubastaOfertas({rows}){
    return (
        <TableContainer sx={{ marginTop: 2 }} component={Paper}>
        <Table fullWidth aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell># </TableCell>
                <TableCell align="right">Oferta</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}

