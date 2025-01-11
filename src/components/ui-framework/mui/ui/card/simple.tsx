import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import * as React from 'react';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SimpleCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom sx={{ fontSize: 14 }}>
          Word of the Day
        </Typography>
        <Typography component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1.5 }}>
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
