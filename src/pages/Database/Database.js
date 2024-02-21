import React from 'react'
import Grid from '@mui/material/Grid';
import lotData from '../../lotData.js';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, CardActions, Button, Container } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Database = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const navigate = useNavigate();
  const interval_id = setInterval(() => {
    if (!localStorage.getItem('user')) {
      localStorage.removeItem('user');
      navigate('/authentication');
      clearInterval(interval_id);
    }
  }, 5 * 1000);
    return (
      <Container sx={{
        mt: '5rem',
        display: 'flex',
        
        ml:   isSmallScreen ? '300px' : '0px',
      }}
      >
        <Grid container spacing={2} sx={{justifyContent: 'space-between'}}>
        <Grid item xs={12}>
            <Typography variant='h5' align='center'>Перелік доступних ділянок</Typography>
        </Grid>
        {lotData.map((lot) => (
          <Grid item key={lot.id} xs={12} sm={6} md={3} lg={3}>
            
            <Card variant='outlined'>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {lot.state} область {lot.area} га
                </Typography>
                <Typography variant="h5" component="div">
                {lot.price} грн. Дохід: {lot.revenue} %
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {lot.cadastral_number} <br /> {lot.region} район
                </Typography>
                <Typography variant="body2">
                🚜 {lot.tenant}
                  <br />
                Оренда на {lot.lease_term} років
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Купити ділянку</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    );
  };
  
  export default Database;