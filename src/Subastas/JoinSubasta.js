import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Alert, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import proto from '../pb/proto_grpc_web_pb';
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
    const [productoEnSubastaActual, setProductoEnSubastaActual] = useState([]);

    /** Producto subasta */
    const [productoActual, setProductoActual] = useState([]);
    
    /** Set Precio de oferta */
    const [winnerUser, setWinnerUser] = useState();
    const [winnerOferta, setWinnerOferta] = useState(0);

    /** Error form add oferta */
    const [error_message, setErrorMessage] = useState('')
    const [rows, setRows] = useState([]);
    const [valSubastaOferta, setValSubastaOferta] = useState(undefined);
    const [user, setUser] = useState({});
    const { token } = useToken();
    const [fecha, setFecha] = useState("");
    const [second, setSecond] = useState("00");
    const [minute, setMinute] = useState("00");
    const [startCount, setStartCount] = useState(false);

    /** Set Update */
    const [update, setUpdate] = useState(false);
    
    /** Step producto */
    const [productoStep, setProductoStep] = useState();

    /** Controles de tiempo */
    const [inicio, setInicio] = useState();
    const [duracion, setDuracion] = useState();

    useEffect(() => {
        /** The Subasta */
        getSubasta();

        /** Get Producto en subasta */
        getProductoEnSubasta();

        /** Products from subasta */        
        getSubastaProductos();

        /** Set Data for User */
        getUser();

        /** Get Test */
        getTest();
    }, [])

    const getTest = () => {
        const format = "YYYY-MM-DD HH:mm:ss"
        let now = moment()
        console.log(now.format(format));
    }

    /** Hacer generica la funcion para reutilizarla en el proximo producto */
    useEffect(() => {
        if(duracion !== undefined && inicio !== undefined){
            let interval = setInterval(() => {
                let _fecha = moment(inicio)
                let actual = moment();
                let tiempo_maximo = moment(inicio);
                tiempo_maximo.add(duracion, 'minute');

                let diferencia_tiempo_maximo = actual.diff(tiempo_maximo, 'minute');
                let diferencia_t_m_seconds = actual.diff(tiempo_maximo, 'second');
                
                //console.log("diferencia tiempo maximo ", diferencia_tiempo_maximo, " ", diferencia_t_m_seconds);
                if(diferencia_tiempo_maximo > 0 && diferencia_t_m_seconds > 0){ // Llego tarde.
                    let fecha = "Ya ha finalizado este fragmento de subasta . . . "
                    setFecha(fecha);
                    
                    setStartCount(false);
                    clearInterval(interval)
                    return ;
                }

                if(diferencia_tiempo_maximo === 0 && diferencia_t_m_seconds === 0){ // quedo no tocar
                    let fecha = "El tiempo de subasta de este producto ha terminado . . . "
                    setFecha(fecha);

                    clearInterval(interval);
                    setUpdate(true);
                    setStartCount(false);
                    return ;
                }

                var diferencia = _fecha.diff(actual, 'minute');
                var dif_seconds = _fecha.diff(actual, 'second');

                /** Dentro de la subasta */
                if (diferencia <= 0 && dif_seconds <= 0){
                    let fecha = "Ha comenzado la subasta";
                    setFecha(fecha);
                    console.log(" --------- DENTRO DEL TIEMPO DE SUBASTA --------- ");
                    let min = (diferencia_tiempo_maximo !== 0) ? (diferencia_tiempo_maximo*-1) : diferencia_tiempo_maximo;
                    let segundo = (diferencia_t_m_seconds !== 0) ? ((diferencia_t_m_seconds*-1)-(min*60)) : diferencia_t_m_seconds;

                    setMinute(min);
                    setSecond(segundo);
                    setStartCount(true);

                    return ;
                }

                if(diferencia >= 0 && dif_seconds > 0){ // quedo ! no tocar
                    console.log("Comenzará en . . . ", diferencia,  dif_seconds-(diferencia*60))
                    let fecha = "Comenzará en "+ diferencia + " minutos " + (dif_seconds-(diferencia*60)) + " segundos.";
                    setFecha(fecha)
                }
            }, 1000)
        }
    }, [inicio, duracion]) // Se ejecuta cuando la variable fecha esta lista

    /** Subasta Oferta Winn y Ofertas */
    useEffect(() => {
        if(startCount && productoEnSubastaActual){
            setInterval(() => {
                getSubastaOfertaWinner(); 
            }, 500)
        }
        getStreamSubastaOfertas();
    }, [startCount, productoEnSubastaActual])

    /** Importante obtener el producto actual en subasta o si no setear el producto que debe subastarse */
    useEffect(() => {
        if(update){
            /** Actualiza el producto que se subasto */
            setUpdateProductoEnSubasta();

            /** Obtiene el producto que se tiene que subastar */
            getProductoEnSubasta();

            /** Products from subasta */        
            getSubastaProductos();

            /** No cambiar producto hasta terminar la subasta actual */
            setUpdate(false);

            console.log("ACCTUALIZACION DE PRODUCTO PARA NUEVO COMIENZOE DE SUBASTA .........................", productoEnSubastaActual)

            /** Reiniciar conteo */
            setStartCount(true);
        }
    }, [update]) // sin [] se ejecuta varias veces 

    /** Get subasta oferta winner por ahora */
    const getSubastaOfertaWinner = () => {
        let request = new proto.SubastaProductoId();
        request.setId(productoEnSubastaActual.id);
        subastaService.getSubastaOfertaWinner(request, {}, (error, response) => {
            //console.log("viene acá o no?", request)
            if(error){
                //setErrorMessage(error.message);
                console.log(error)
            }else{
                let oferta_precio = response.getOfertaPrecio();
                let user = response.getUser();

                if(winnerOferta < oferta_precio){
                    setWinnerOferta(oferta_precio);
                    setWinnerUser(user);
                }
            }
        })
    } 

    /** Get User info */
    const getUser = () => {
        var token_decoded = jwt_decode(token);
        let user = {
            users_id: token_decoded.users_id,
            name: token_decoded.name,
            photo: token_decoded.profile_photo_path,
        }
        setUser(user);
    }

    const getStreamSubastaOfertas = () => {
        let request = new proto.SubastaProductoId();
        request.setId(productoEnSubastaActual.id)

        /** Ofertas de la subasta de un producto */
        var stream = subastaService.getStreamSubastaOfertas(request, {});
        stream.on('data', function(response){
            let record = {
                user: response.getUser(),
                oferta: response.getOfertaPrecio()
            };   

            setRows((rows) => [...rows, record])
        })
        stream.on("status", function (status) {
            console.log(status.code, status.details, status.metadata);
          });
      
        stream.on("end", () => {
            console.log("Stream ended.");
        });

        
        /* var stream_oferta_winner = subastaService.getStreamSubastaOfertaWinner(request, {});
        stream_oferta_winner.on('data', function(response){
            console.log("RESPUESTA GANADORA", response.getOfertaPrecio())
            setWinnerUser(response.getUser())
            setWinnerOferta(response.getOfertaPrecio())
        });

        stream_oferta_winner.on("status", function (status) {
            console.log(status.code, status.details, status.metadata);
          });
      
        stream_oferta_winner.on("end", () => {
            console.log("Stream ended.");
        }); */

    };

    const getSubasta = () => {
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
                    descanso: response.getDescanso(),
                    created_at: response.getCreatedAt(),
                    updated_at: response.getUpdatedAt()
                }

                setSubasta(subasta);
                setDuracion(response.getDuracion());
            }
        });
    }

    const getSubastaProductos = () => {
        var request = new proto.SubastaId()
        request.setId(id) // Id from param 
        var metadata = {}

        subastaService.getSubastaProductos(request, metadata, (err, response) => {
            if(err !== null){
                console.log("Error en get Subasta Productos ", err.code, err.message)
                return ;
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
                            status: subastaProducto.array[5],
                            orden: subastaProducto.array[6],
                            inicio: subastaProducto.array[7],
                        }
                    })
                setSubastaProductos(subastaProductosList);
            }
        });
    }

    /** Actualizar el producto en subasta una vez terminado */
    const setUpdateProductoEnSubasta = () => {
        /** Set oferta final y winner */
        let request = new proto.SubastaProductoId();
        request.setId(productoEnSubastaActual.id)
        subastaService.getWinner(request, {}, (error, response) => {
            //console.log(error, response)
            if(error){
                setErrorMessage(error.message)
                return ;
            }
            setWinnerUser(response.getUser())
            setWinnerOferta(response.getOfertaFinal());
        });
    }

    

    /** Obtener el producto en subasta si ya existe --- de acuerdo al Id y Tiempo */
    const getProductoEnSubasta = () => {
        let format = "YYYY-MM-DD HH:mm:ss"
        let now = moment()
        now = now.format(format);
        let request = new proto.SubastaIdTime()
        request.setId(id) // id from params
        request.setTime(now)

        subastaService.getSubastaProductoEnSubasta(request, {}, (error, response) => {
            if(!error){
                let subastaProducto = SetterSubastaProducto(response)            
                setProductoEnSubastaActual(subastaProducto);
                setProductoActual(subastaProducto.producto)

                setInicio(subastaProducto.inicio);
                setDuracion(subasta.duracion);

                /** Set Orden de producto */
                setProductoStep(subastaProducto.orden);

            }else{
                console.log(error)
            }
        })
    }


    /** Crear una Oferta para un producto en subasta */
    const handlerCreateSubastaOferta = (e) => {
        e.preventDefault();
        console.log(valSubastaOferta, productoActual.precio_inicial, productoEnSubastaActual.id);

        if(isNaN(valSubastaOferta)){
            setErrorMessage('Ingresa un número valido.');
            return ;
        }

        if(valSubastaOferta < (productoActual.precio_inicial+productoActual.precio_aumento)){
            setErrorMessage('Debe ser superior al precio inicial: '+productoActual.precio_inicial);
            return ;
        }
        let ofertaGanadora = winnerOferta;

        console.log("Cual es la oferta ganadora actual: ", ofertaGanadora)
        if(valSubastaOferta < (ofertaGanadora+productoActual.precio_aumento)){
            setErrorMessage('El valor de oferta debe ser superior a '+ (ofertaGanadora+productoActual.precio_aumento));
            return ;
        } 

        let subastaOfertaCreate = new proto.SubastaOfertaCreate();
        subastaOfertaCreate.setUsersId(user.users_id);
        subastaOfertaCreate.setOfertaPrecio(valSubastaOferta);
        subastaOfertaCreate.setSubastasProductosId(productoEnSubastaActual.id);

        subastaService.addSubastaOferta(subastaOfertaCreate, {}, (error, _) => {
            if(error !== null) {
                console.log(error.code, error.message)
            }
            setErrorMessage("");
        });

        setValSubastaOferta(undefined)
        document.getElementById('valSubastaOferta').value = '';
    }


    /** Extrac subasta producto from request gRPC */
    const SetterSubastaProducto = (response) => {
        let subastaProducto = {
            id: response.array[0],
            producto: {
                productos_id: response.array[1][0],
                producto: response.array[1][1],
                descripcion: response.array[1][2],
                stock: response.array[1][3],
                precio_inicial: response.array[1][4],
                precio_aumento: response.array[1][5],
                precio_subasta: response.array[1][6],
                cliente: {
                    cliente_id: response.array[1][7][0],
                    cliente: response.array[1][7][1],
                    cuit: response.array[1][7][2],
                    direccion: response.array[1][7][3],
                    ciudad: response.array[1][7][4],
                    iva: response.array[1][7][5],
                },
            },
            activo: response.array[2],
            oferta_final: response.array[3],
            subastas_ofertas_id_winner: response.array[4],
            status: response.array[5],
            orden: response.array[6],
            inicio: response.array[7],
        };

        return subastaProducto;
    }

    return (
        <Layout>
            <Box sx={{ paddingTop: 8 }}>
                <Container>
                    <Grid container spacing={5}>
                        <Grid item xs={5} align="left">      
                            <Box style={{ paddingBottom: '20px' }}>
                                <Typography variant="h1" fontSize={40}>
                                    {subasta.subasta}
                                </Typography> 
                                <Typography fontSize="small">
                                    Fecha y hora: {subasta.fecha}
                                </Typography>

                                {Object.entries(productoEnSubastaActual).length > 0 && Object.entries(productoActual).length > 0 && <Typography fontSize="small">
                                    Subastando producto desde: {(productoEnSubastaActual.inicio) ? productoEnSubastaActual.inicio : subasta.fecha} / N° producto: {productoEnSubastaActual.orden} <br></br>
                                    Subastando - {productoActual.producto} / {productoEnSubastaActual.status} / Unidades - {productoActual.stock} <br></br>  
                                </Typography>}
                            </Box>

                            {winnerOferta !== undefined && winnerUser !== undefined && !startCount && <Grid container>   
                                 <Grid item xs={12} paddingY={4}>
                                    <Alert  variant="outlined" severity="success">
                                        Ganador de última subasta: {winnerUser} - $ { winnerOferta }
                                    </Alert>
                                </Grid>
                            </Grid>}

                            {startCount && <Grid container>   
                                {winnerOferta !== undefined && winnerUser !== undefined && <Grid item xs={12} paddingBottom={4}>
                                    <Alert  variant="outlined" severity="success">
                                        MEJOR OFERTA POR: {winnerUser} - $ { winnerOferta }
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
                            </Grid>}


                            {startCount && <DataGridSubastaOfertas rows={rows} />}
                            
                        </Grid>

                        <Grid item xs={7}>  
                                
                            <Box style={{ paddingBottom: '40px', paddingTop: '20px' }}>
                                <Typography align='center'>
                                    {fecha} 
                                </Typography>
                                
                                {startCount && 
                                <div style={{ display:'flex', justifyContent:'center', width:'100%' }}>
                                    <Box padding={2} sx={{ borderRadius: 1, backgroundColor: '#e6e6e6', margin: 1 }}>
                                        {minute} : {second} 
                                    </Box>
                                </div>}

                            </Box>
                            {productoStep && subastaProductos && <StepperVertical steps={subastaProductos} actual={productoStep-1} />}
                        </Grid>
                    </Grid>

                         
                </Container>
            </Box>
        </Layout>
    )
}


