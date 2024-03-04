import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function CardShort({ data }) {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{height: 140}}
          image={data.imagen}
          alt={data.tipo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contacto: {data.contacto}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            dirección: {data.direccion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}