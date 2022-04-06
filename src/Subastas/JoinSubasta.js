import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Alert, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import proto from '../pb/proto_grpc_web_pb';
import { makeStyles } from '@material-ui/core/styles';
import DataGridSubastaOfertas from '../components/DataGridTable';
import Layout from '../components/Layout/Layout';
import useToken from '../App/useToken';
import jwt_decode from 'jwt-decode';
import StepperVertical from '../components/StepperVertical';
import moment from 'moment';


/** My Client gRPC - to Golang gRPC Server */
var subastaService = new proto.SubastaServiceClient('http://0.0.0.0:8000');


export default function JoinSubasta(){
    const { id } = useParams();

    /** Info Subasta */
    const [subasta, setSubasta] = useState({});

    /** Lista de productos en subasta */
    const [subastaProductos, setSubastaProductos] = useState([]);

    /** Producto actual en Subasta */
    const [productoEnSubastaActual, setProductoEnSubastaActual] = useState(0);

    /** Producto subasta */
    const [subastaProductoActual, setSubastaProductoActual] = useState(0);
    
    /** Error form add oferta */
    const [error_message, setErrorMessage] = useState('')
    const classes = useStyles();
    const [rows, setRows] = useState([]);
    const [valSubastaOferta, setValSubastaOferta] = useState(undefined);
    const [user, setUser] = useState({});
    const { token } = useToken();
    const [fecha, setFecha] = useState("");
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [startCount, setStartCount] = useState(false);
    const [subastaFinalizada, setSubastaFinalizada] = useState(false);
    const useStyles = makeStyles({bold: {fontWeight: 600}})

    useEffect(() => {
        /** The Subasta */
        getSubasta();

        /** Products from subasta */
        getSubastaProductos();

        /** Ofertas */
        getSubastaOfertas();

        /** Set Data for User */
        getUser();
    }, [])


    useEffect(() => {
        if(subasta.fecha && subasta.duracion){
            let interval = setInterval(()=>{
                let fecha = new Date(subasta.fecha)
                let actual = new Date();
                if(actual < fecha){
                    fecha = "Comenzará el "+ fecha.toLocaleDateString("es", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + " a las "+ fecha.getHours()+":"+fecha.getSeconds()+".";
                    setFecha(fecha);

                    setStartCount(false);
                    return ;
                }

                if(actual.getTime() == fecha.getTime()){
                    fecha = "La subasta ha comenzado";
                    setFecha(fecha)

                    setStartCount(true);
                    return ;
                }

                if(actual > fecha && !subastaFinalizada){
                    fecha = "La subasta ha comenzado a las "+ fecha.getHours()+":"+fecha.getMinutes();
                    setFecha(fecha)

                    setStartCount(true);
                    return ;
                }
            }, 1000)
        }
    }, [subasta.fecha, subasta.duracion]) // Se ejecuta cuando la variable fecha esta lista


    useEffect(() => {
         if(startCount){
            console.log("Comenzar la cuenta regresiva");

            var duration = moment.duration({
                'minutes': subasta.duracion,
                'seconds': 0  
            });
            
            let eventDay = moment(subasta.fecha);
            eventDay.add(subasta.duracion, 'minutes');

            var timestamp = new Date(eventDay);
            var interval = 1;
            var timer = setInterval(function() {
                timestamp = new Date(timestamp.getTime() + interval * 1000);
                duration = moment.duration(duration.asSeconds() - interval, 'seconds');
                var min = duration.minutes();
                var sec = duration.seconds();

                sec -= 1;
                if (min < 0) return clearInterval(timer);
                if (min < 10 && min.length != 2) min = '0' + min;
                if (sec < 0 && min != 0) {
                    min -= 1;
                    sec = 59;
                } else if (sec < 10 && sec.length != 2) sec = '0' + sec;
                setSecond(sec);
                setMinute(min);
                if (min == 0 && sec == 0){
                    clearInterval(timer);
                    setStartCount(false);
                }

            }, 1000);
        }

    }, [startCount])

    const getUser = () => {
        console.log("token. . . .", token)
        var token_decoded = jwt_decode(token);
        let user = {
            users_id: token_decoded.users_id,
            name: token_decoded.name,
            photo: token_decoded.profile_photo_path,
        }
        setUser(user);
    }

    const getSubastaOfertas = () => {
        console.log("Obteniendo subastas ofertas -- from server golang")
    
        let request = new proto.SubastaProductoId();
        request.setId(productoEnSubastaActual.id)
        var stream = subastaService.getSubastaOfertas(request, {});

        stream.on('data', function(response){
            let record = {
                user: response.getUser(),
                oferta: response.getOfertaPrecio()
            };   

            if(record.oferta > winnerOferta){
                setWinnerOferta(record.oferta)
            }

            setRows((rows) => [...rows, record])
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
                    duracion: response.getDuracion(),
                    created_at: response.getCreatedAt(),
                    updated_at: response.getUpdatedAt()
                }
                setSubasta(subasta);
            }
        });
    }

    const getSubastaProductos = () => {
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
                                },
                            },
                            activo: subastaProducto.array[2],
                            oferta_final: subastaProducto.array[3],
                            subastas_ofertas_id_winner: subastaProducto.array[4],
                            status: subastaProducto.array[5]
                        }
                    })

                    console.log(subastaProductosList)

                setSubastaProductos(subastaProductosList);
                //setProductoEnSubastaActual(subastaProductosList[0].producto) // producto en subasta
            }
        });
    }


    useEffect(()=>{
        if(subastaProductos){
            let findNextProducto = false;
            subastaProductos.forEach(element => {
                if(element.status === "en espera" && !findNextProducto){
                    setSubastaProductoActual(element)
                    setProductoEnSubastaActual(element.producto)
                    findNextProducto = true;
                }
            });
        }
    }, [subastaProductos])


    const handlerCreateSubastaOferta = (e) => {
        e.preventDefault();

        if(!(valSubastaOferta !== "" && valSubastaOferta > productoEnSubastaActual.precio_inicial)) {
            setErrorMessage('El valor de oferta de ser superior o igual al precio inicial.');
            return ;
        }

        var ofertaGanadora = 0;
        if(winnerOferta === 0) {
            ofertaGanadora = productoEnSubastaActual.precio_inicial} 
        else {
            ofertaGanadora = winnerOferta;
        };
        console.log(winnerOferta, productoEnSubastaActual.precio_inicial, ofertaGanadora+productoEnSubastaActual.precio_aumento)
        if(!(valSubastaOferta >= (ofertaGanadora+productoEnSubastaActual.precio_aumento))){
            setErrorMessage('El valor de oferta de ser superior o igual al precio ganador + el precio de aumento del producto.');
            return ;
        } 

        let subastaOfertaCreate = new proto.SubastaOfertaCreate();
        subastaOfertaCreate.setUsersId(user.users_id);
        subastaOfertaCreate.setOfertaPrecio(valSubastaOferta);
        subastaOfertaCreate.setSubastasProductosId(1);

        subastaService.addSubastaOferta(subastaOfertaCreate, {}, (error, _) => {
            if(error !== null) console.log(error.code, error.message);
        });

        setValSubastaOferta(undefined)
        document.getElementById('valSubastaOferta').value = '';
    }

    return (
        <Layout>
            <Box sx={{ paddingTop: 8 }}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={5} align="left">      
                            <Box style={{ paddingBottom: '20px' }}>
                                <Typography variant="h1" fontSize={40} className={classes.bold}>
                                    {subasta.subasta}
                                </Typography>        
                                <Typography>
                                    Subastando - {productoEnSubastaActual.producto}<br></br>  
                                    Unidades - {productoEnSubastaActual.stock} <br></br>
                                </Typography>    
                            </Box>

                            <Grid container>   
                                {winnerOferta > 0 &&
                                <Grid item xs={12} paddingY={4}>
                                    <Alert  variant="outlined" severity="success">
                                        Oferta ganadora: { winnerOferta }
                                    </Alert>
                                </Grid>}


                                {error_message !== '' &&
                                <Grid item xs={12} paddingBottom={4}> 
                                    <Alert severity="error">{ error_message }</Alert>  
                                </Grid>}

                                <Grid item xs={8}>
                                    <TextField 
                                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*'  }}
                                        style={{ height:'38px' }}
                                        id="valSubastaOferta" 
                                        onChange={(e) => setValSubastaOferta(e.target.value)} 
                                        fullWidth 
                                        label="Ofertar" 
                                        variant="outlined" 
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Button onClick={handlerCreateSubastaOferta} fullWidth variant="outlined" size="large" 
                                        /* style={{ paddingTop: '13px', paddingBottom: '13px' }} */
                                        style={{ padding:'14px' }}
                                    >
                                        Ofertar
                                    </Button>
                                </Grid>
                            </Grid>

                            {/* <DataTableSubastaOfertas rows={rows} /> */}
                            <DataGridSubastaOfertas rows={rows} />
                            
                        </Grid>

                        <Grid item xs={7}>  
                                
                            <Box style={{ paddingBottom: '40px', paddingTop: '20px' }}>
                                <Typography align='center'>
                                    {fecha} 
                                </Typography>
                                
                                {startCount && 
                                <div style={{ display:'flex', justifyContent:'center', width:'100%' }}>
                                    <Box padding={2} sx={{ borderRadius: 1, backgroundColor: '#e6e6e6', margin: 1 }}>
                                        {minute}
                                    </Box>
                                
                                    <Box padding={2} sx={{ borderRadius: 1, backgroundColor: '#e6e6e6', margin: 1 }}>
                                        {second}
                                    </Box>
                                </div>}

                            </Box>

                            <StepperVertical steps={subastaProductos}/>
                            {/*  <StepperListSubastaProductos subastaProductos={subastaProductos}/> */}
                        </Grid>
                    </Grid>

                         
                </Container>
            </Box>
        </Layout>
    )
}
