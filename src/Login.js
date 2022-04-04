// eslint-disable-next-line 
import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

export default function Login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        //this.setState({ [e.currentTarget.id]: e.currentTarget.value });
    };
    

    return (
        <>
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
                >

                <Grid item xs={3}>
                    
                    <TextField
                        label="Email"
                        id="email"
                        fullWidth
                        onChange={handleChange}
                        type="text"

                        sx={{ mt: 3 }}
                    />
                    <TextField
                        label="Password"
                        id="password"
                        fullWidth
                        onChange={handleChange}
                        type="password"

                        sx={{ mt: 3 }}

                    />

                    <Button 
                        color="primary"                         
                        className="form__custom-button"
                        fullWidth
                        sx={{ mt: 3 }}
                        >
                        Log in
                    </Button>
                </Grid>       
            </Grid> 
        </>
    );
}
