import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {
      return(
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                    <Button color='inherit' LinkComponent={Link} to='/'>
                        Subastas
                    </Button>

                    <Button color='inherit' LinkComponent={Link} to='/login'>
                        Login
                    </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
      );
    }
}
  
export default Header;