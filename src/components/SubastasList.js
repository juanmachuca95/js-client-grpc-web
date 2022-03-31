import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';


export default function SubastasList({ subastas }) {
    return (
        <Container>
            <Grid container spacing={2}>
            {
                subastas.map((subasta, i) => {
                    return <Grid item xs={4}>
                        <SubastaCard subasta={subasta} key={i} />
                    </Grid> 
                }
            )}
            </Grid>
        </Container>
    );
}

function SubastaCard({subasta}){
    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    { subasta.fecha }
                </Typography>
                <Typography variant="h5" component="div">
                    { subasta.subasta }
                </Typography>
            </CardContent>
            <CardActions>
               <Link to={"/joinsubasta/"+subasta.id}>
                Unirse
               </Link>
            </CardActions>
        </Card>
    )
}