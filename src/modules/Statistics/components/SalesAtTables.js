import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectStatisticsList } from '../../../store/selectors/selectors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function SalesAtTables() {
  const salesArray = useSelector(selectStatisticsList);
  const labels = salesArray.map((elem) => elem.table);
  const sales = salesArray.map((elem) => elem.sum);
  console.log(sales);
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
        label: 'Дохід по столиках',
        data: sales,
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  };
  return (
    <Box style={{width:500, height:400}}>
      <Bar options={options} data={data} />
    </Box>
  )
}
