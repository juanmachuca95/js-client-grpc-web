import React from "react";
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"

function CardItemProducto({producto}){
    return (
        <Card align="left">
            <CardHeader
                avatar={
                <Avatar style={{ backgroundColor: 'orange' }} aria-label="recipe">
                    R
                </Avatar>
                }
                title={ producto.producto }
                subheader={ 'Inicial: $'+producto.precio_inicial +' / Aumento: $'+producto.precio_aumento+' / Subasta: $'+ producto.precio_subasta }
            />
            <CardMedia
                component="img"
                height="194"
                image="https://images.unsplash.com/photo-1535050264505-ba17be3ee504?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                Descripción: {producto.descripcion}
                </Typography>
                <Typography variant="h5" component="div">
                    { producto.producto.stock }
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardItemProducto;