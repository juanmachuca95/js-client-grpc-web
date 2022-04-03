import React, { useEffect, useState, useRef, createRef } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Card, CardContent, Container, Grid, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import proto from '../pb/proto_grpc_web_pb';

var subastaService = new proto.SubastaServiceClient('http://0.0.0.0:8000');

export default function JoinSubasta(){
    const { id } = useParams();
    const [subasta, setSubasta] = useState({});
    const [subastaProductos, setSubastaProductos] = useState([]);
    const [productoEnSubastaActual, setProductoEnSubastaActual] = useState(0);
    const [columns, setColumns] = useState([
        { field: 'user', headerName: 'Usuario', width: 70 },
        { field: 'oferta', headerName: 'Oferta', width: 130 }
    ]);

    const [rows, setRows] = useState([]);
    /** Input */
    const [valSubastaOferta, setValSubastaOferta] = useState(undefined);

    const count = useRef(0);
    useEffect(()=>{
        getSubasta();
        getSubastaProductos();
        getSubastaOfertas();

        count.current = count.current + 1;
    }, [])

    const getSubscripcionProductoSubasta = () => {
        
    }

    const getSubastaOfertas = () => {
        console.log("called")
    
        let request = new proto.SubastaProductoId();
        request.setId("1")
        var stream = subastaService.getSubastaOfertas(request, {});

        stream.on('data', function(response){
            let record = {
                user: response.getUser(),
                oferta: response.getOfertaPrecio()
            };   

            setRows((rows) => [...rows, record])
            console.log(record)
        })

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
                setProductoEnSubastaActual(subastaProductosList[0].producto) // producto en subasta
            }
        });
    }


    const handlerCreateSubastaOferta = (e) => {
        e.preventDefault();

        if(valSubastaOferta === "") return ;
        let subastaOfertaCreate = new proto.SubastaOfertaCreate();
        subastaOfertaCreate.setUsersId(1);
        subastaOfertaCreate.setOfertaPrecio(valSubastaOferta);
        subastaOfertaCreate.setSubastasProductosId(1);

        subastaService.addSubastaOferta(subastaOfertaCreate, {}, (error, response) => {
            if(error !== null) console.log(error.code, error.message);
            console.log(response)
        });

        setValSubastaOferta(undefined)
        document.getElementById('valSubastaOferta').value = '';
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
                                    Productos en subasta ({ subastaProductos.length}) <br></br>
                                    Número de render {count.current}   
                                </Typography>    
                                <h6>Subastando producto id: {productoEnSubastaActual.producto}</h6>
                            </Box>

                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <TextField 
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                                        id="valSubastaOferta" 
                                        onChange={(e) => setValSubastaOferta(e.target.value)} 
                                        fullWidth 
                                        label="Ofertar" 
                                        variant="outlined" />
                                </Grid>
                                <Grid item xs={4}>
                                    <Button onClick={handlerCreateSubastaOferta} fullWidth variant="outlined" size="large">Ofertar</Button>
                                </Grid>
                            </Grid>

                            {/* <DataTableSubastaOfertas rows={rows} /> */}
                            <DataGridSubastaOfertas rows={rows} />
                            
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

function DataGridSubastaOfertas({rows}){
    const columns = [
        { field: 'user', headerName: 'Usuario', width: 150 },
        { field: 'oferta', headerName: '$ Oferta', width: 150 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row.oferta}
          />
        </div>
      );
}

function DataTableSubastaOfertas({rows}){
    const listContent = rows.map((row) => {
        return <TableRow key={row.oferta}>
        <TableCell component="th" scope="row">
            {row.user}
        </TableCell>
        <TableCell component="th" scope="row">
            {row.oferta}
        </TableCell>
        </TableRow>
    })


    return (
        <TableContainer sx={{ marginTop: 2 }} component={Paper}>
        <Table aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Usuario </TableCell>
                <TableCell align="left">Oferta</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>

                { listContent }

            </TableBody>
        </Table>
        </TableContainer>
    )
}

