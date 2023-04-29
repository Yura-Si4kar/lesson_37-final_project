import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectTablesList } from '../../../store/selectors/selectors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function SalesAtTables({sales}) {
  const labels = useSelector(selectTablesList).map((item) => item.name)
  
  const getDataSales = () => {
    let salesSum = [];

    for (let i = 0; i < labels.length; i++) {
      salesSum.push(sales.filter((item) => item.table === `table ${i + 1}`).reduce((acc, item) => acc + item.sum, 0))
    }

    return salesSum;
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'Дохід по столиках в $',
        data: getDataSales(),
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  };
  return (
    <Box style={{ width: 100 + '%', height: 500, marginBottom: 100, textAlign: 'center' }}>
      <Typography variant='h2'>Дохід від столиків</Typography>
      <Bar options={options} data={data} />
    </Box>
  )
}
