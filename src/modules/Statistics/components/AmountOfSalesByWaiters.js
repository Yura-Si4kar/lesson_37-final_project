import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectPersonnelList } from '../../../store/selectors/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AmountOfSalesByWaiters({ sales }) {
  const waiters = useSelector(selectPersonnelList);
  
  const calculateTheWaitersProfit = () => {
    let profit = [];
    let totalAmount = sales.reduce((acc, item) => acc + item.sum, 0);
    
    for (let i = 0; i < waiters.length; i++) {
      let waiterSales = sales.filter((item) => item.waiter === waiters[i].name);
      let salesPercentage = waiterSales.reduce((acc, item) => acc + item.sum, 0) * 100 / totalAmount;

      profit.push(salesPercentage.toFixed(2))
    }
    
    return profit;
  }

  const createBackgroundsColor = () => {
    let colors = [];

    for (let i = 0; i < waiters.length; i++) {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
      let hexColor = '#';
     
      for (let i = 0; i < 6; i++) {      
        hexColor += hex[getRandomHexColor()];
      }
        
      colors.push(hexColor);
    
      function getRandomHexColor() {
        return Math.floor(Math.random() * hex.length);
      }
    } 
    
    return colors;
  }
  
  const data = {
    labels: waiters.map((waiter) => waiter.name),
  datasets: [
      {
        label: 'Прибуток з офіціантів',
        data: calculateTheWaitersProfit(),
        backgroundColor: createBackgroundsColor(),
        borderColor: createBackgroundsColor(),
        borderWidth: 1,
      },
    ],
  }; 

  return (
    <Box style={{ width: 50 + '%', height: 400 }}>
      <Typography variant='h3'>Дохід від офіціантів</Typography>
        <Pie data={data} />
    </Box>
  );
}
