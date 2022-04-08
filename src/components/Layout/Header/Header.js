import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import useToken from '../../../App/useToken';
import Login from '../../../Login';
import jwt_decode from 'jwt-decode';



function Header(){
    const { token, setToken } = useToken();
    const [user, setUser] = useState({});

    useEffect(()=>{
        getUser();
    },[])

    const Logout = () => {
        sessionStorage.clear();
        sessionStorage.removeItem('token');
        window.location="/";
    }

    const getUser = () => {
        var token_decoded = jwt_decode(token);
        let user = {
            users_id: token_decoded.users_id,
            name: token_decoded.name,
            photo: token_decoded.profile_photo_path,
        }
        setUser(user);
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
                                
                                <Button align="left" color='inherit' LinkComponent={Link} to='/' >
                                    Subastas
                                </Button>

                                <Button color='inherit' onClick={Logout}>
                                    { user.name }
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