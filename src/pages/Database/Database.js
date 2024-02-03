import React from 'react'
import Grid from '@mui/material/Grid';
import lotData from '../../lotData.js';
import BuyButton from '../../components/common/BuyButton/BuyButton.js'

const Database = () => {
    return (
        
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <div style={{ marginLeft: '400px' }}>
            <h2>Перелік доступних ділянок</h2>
          </div>
        </Grid>
        {lotData.map((lot) => (
          <Grid item key={lot.id} xs={12} sm={6} md={4} lg={3}>
            <div style={{ marginLeft: '50px' }}>
              <strong>📊</strong> {lot.area} га, <br />
              <strong>Ціна:</strong> ₴ {lot.price} <br />
              <strong>Дохід:</strong> {lot.revenue} <br />
              <strong>Кадастровий номер:</strong> {lot.cadastral_number} <br />
              <strong>Область:</strong> {lot.state} <br />
              <strong>Район:</strong> {lot.region} <br />
              <strong>🚜 Орендар:</strong> {lot.tenant} <br />
              <strong>Термін оренди:</strong> {lot.lease_term} years <br />
              <BuyButton>Придбати</BuyButton>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default Database;