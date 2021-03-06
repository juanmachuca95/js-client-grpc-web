// eslint-disable-next-line 
import React, { useState } from "react";
import { Button, Box, Grid, TextField, Alert, Typography } from "@mui/material";
import proto from './pb/proto_grpc_web_pb'

var loginService = new proto.LoginServiceClient('http://0.0.0.0:8000');

export default function Login ({setToken}){
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error_message, setErrorMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email !== "" && password !== ""){
            let request = new proto.LoginRequest();
            request.setEmail(email);
            request.setPassword(password);
            loginService.login(request, {}, (error, response) => { 
                if(error){
                    setErrorMessage(error.message)
                    return ;
                }

                if(response.getError()){
                    setErrorMessage(response.getError())
                    return ;
                }

                setToken(response.getToken())
                setEmail(null);
                setPassword(null);
                return ;
            })
        }
    }

    return (
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            >

            <Grid item xs={3}>
                <Box 
                    component="form"
                    onSubmit={handleSubmit}

                >

                    <Box sx={{ p:3 }}>
                        <Typography variant="h1" align="center" fontSize={40} style={{ fontWeight:600 }}>
                            SUBASTAS
                        </Typography>        
                    </Box>

                    {error_message !== undefined &&
                    <Grid item xs={12}> 
                        <Alert severity="error">{ error_message }</Alert>  
                    </Grid>}

                    <TextField
                        label="Email"
                        id="email"
                        fullWidth
                        onChange={e => setEmail(e.target.value)}
                        type="text"

                        sx={{ mt: 3 }}
                    />
                    <TextField
                        label="Password"
                        id="password"
                        fullWidth
                        onChange={e => setPassword(e.target.value)}
                        type="password"

                        sx={{ mt: 3 }}

                    />

                    <Button 
                        variant="contained"
                        size="large"
                        type="submit"
                        fullWidth
                        sx={{ mt: 3 }}
                        >
                        Log in
                    </Button>
                </Box>
            </Grid>       
        </Grid> 
    );
}
