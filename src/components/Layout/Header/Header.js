import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import useToken from '../../../App/useToken';
import Login from '../../../Login';


function Header(){
    const { token, setToken } = useToken();

    const Logout = () => {
        sessionStorage.clear();
        sessionStorage.removeItem('token');
        window.location="/";
    }

    if(!token){
        return <Login setToken={setToken} />
    }else{
        return(
            <header>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Container>
                            <Toolbar>
                            <Button color='inherit' LinkComponent={Link} to='/'>
                                Subastas
                            </Button>
    
                            <Button color='inherit' onClick={Logout}>
                                Log Out
                            </Button>
                            
                            </Toolbar>
                        </Container>
                    </AppBar>
                </Box>
            </header>
        );
    }


}
  
export default Header;