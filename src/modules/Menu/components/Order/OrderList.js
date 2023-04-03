// import React, { useState } from 'react';
// import { Box, Grid, List, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { useSelector } from 'react-redux';
// import { selectOrdersList, selectPersonnelList, selectTablesList } from '../../../../store/selectors/selectors';
// import OrderListItem from './OrderListItem';

// const Demo = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

// export default function OrderList() {
//     const list = useSelector(selectOrdersList);
//     const personnel = useSelector(selectPersonnelList);
//     const tables = useSelector(selectTablesList);

//     const [personnelValue, setPersonnelValue] = useState('');
//     const [tablesValue, setTablesValue] = useState('');

//     const getOrdersSum = (list) => {
//         return list.reduce((acc, item) => acc + (item.price * item.numbers), 0);
//     }

//     return (
//         <Box sx={{ flexGrow: 1, width: 550}}>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} md={12}>
//                 <Demo>
//                     <List>
//                         {list.map((item) => <OrderListItem key={item.id} item={item} />)}
//                     </List>
//                 </Demo>
//                 </Grid>
//             </Grid>
//             <Typography paragraph style={{
//                 textAlign: 'right'
//             }}>Загальна сума: {getOrdersSum(list) + ' $'}</Typography>
//             <Box>
//                 Офіціант: 
//                 <Box>
//                     <select defaultValue={personnelValue} onChange={(event) => setPersonnelValue(event.target.value)}>
//                         {personnel.map((person) => <option key={person.id} value={person.name}>{person.name}</option>)}
//                     </select>
//                 </Box>
//             </Box>
//             <Box>
//                 Стіл №: 
//                 <Box>
//                     <select defaultValue={tablesValue} onChange={(event) => setTablesValue(event.target.value)}>
//                         {tables.map((table) => <option key={table.id} value={table.name}>{table.name}</option>)}
//                     </select>
//                 </Box>
//             </Box>
//         </Box>
//     )
// }
