import React from 'react';
import { Box, Grid, List, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectOrdersList, selectPersonnelList, selectTablesList } from '../../../../store/selectors/selectors';
import OrderListItem from './OrderListItem';
import PesonnelSelect from '../../../../Components/PesonnelSelect';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function OrderList() {
    const list = useSelector(selectOrdersList);
    const personnel = useSelector(selectPersonnelList);
    const tables = useSelector(selectTablesList);

    const getOrdersSum = (list) => {
        return list.reduce((acc, item) => acc + (item.price * item.numbers), 0);
    }
    
    return (
        <Box sx={{ flexGrow: 1, width: 550}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                <Demo>
                    <List>
                        {list.map((item) => <OrderListItem key={item.id} item={item} />)}
                    </List>
                </Demo>
                </Grid>
            </Grid>
            <Typography paragraph style={{
                textAlign: 'right'
            }}>Загальна сума: {getOrdersSum(list) + ' $'}</Typography>
            <Box>
                Офіціант: <PesonnelSelect array={personnel}/>
            </Box>
            <Box>
                Стіл №: <PesonnelSelect array={tables}/>
            </Box>
        </Box>
    )
}
