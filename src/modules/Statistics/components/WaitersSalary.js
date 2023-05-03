import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectPersonnelList } from '../../../store/selectors/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function WaitersSalary({ sales }) {
    const waiters = useSelector(selectPersonnelList);

    const calculateSalary = () => {
        let salary = [];

        for (let i = 0; i < waiters.length; i++) {
            let waiterSales = sales.filter((item) => item.waiter === waiters[i].name);
            let waitersSalary = waiterSales.reduce((acc, item) => acc + item.sum, 0) * waiters[i].salary / 100;
            
            salary.push(waitersSalary)
        }
      
        let totalWaitersSalary = salary.reduce((acc, val) => acc + val, 0);
        let salaryPercentage = salary.map((item) => (item * 100 / totalWaitersSalary).toFixed(2))

        return salaryPercentage;
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
            label: 'Зароблено коштів за весь період',
            data: calculateSalary(),
            backgroundColor: createBackgroundsColor(),
            borderColor: createBackgroundsColor(),
            borderWidth: 1,
            },
        ],
    };

    return (
        <Box style={{ width: 50 + '%', height: 400 }}>
            <Typography variant='h3'>Активність працівників</Typography>
            <Doughnut data={data} />
        </Box>
    )
}
