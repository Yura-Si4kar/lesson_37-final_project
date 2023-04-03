import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, List, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { selectOrdersList, selectPersonnelList, selectTablesList } from '../../../../store/selectors/selectors';
import { styled } from '@mui/material/styles';
import OrderListItem from './OrderListItem';
import { tieTheOrderToTheTable } from '../../../../store/actions/actions';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function FullOrderPopupBtn({ open, handleClose }) {
  const list = useSelector(selectOrdersList);
  const personnel = useSelector(selectPersonnelList);
  const tables = useSelector(selectTablesList);
  const dispatch = useDispatch();

  const [waiter, setWaiter] = useState('');
  const [table, setTable] = useState('');

  const getOrdersSum = (list) => {
    return list.reduce((acc, item) => acc + (item.price * item.numbers), 0);
  }

  function onSubmit() {
    let order = {
      id: Date.now(),
      list,
      waiter,
      name: table,
    }
    console.log(order);
    dispatch(tieTheOrderToTheTable(order));
    handleClose();
  }

  function onCansel() {
    handleClose();
  }

  return (
    <Dialog
      open={open}
      style={{position: 'fixed', bottom: 50, right: 28}}
      >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">Замовлення</DialogTitle>
      <DialogContent>
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
                Офіціант: 
                <Box>
                    <select defaultValue={waiter} onChange={(event) => setWaiter(event.target.value)}>
                        {personnel.map((person) => <option key={person.id} value={person.name}>{person.name}</option>)}
                    </select>
                </Box>
            </Box>
            <Box>
                Стіл №: 
                <Box>
                    <select onChange={(event) => setTable(event.target.value)}>
                        {tables.map((table) => <option key={table.id} value={table.name}>{table.name}</option>)}
                    </select>
                </Box>
            </Box>
        </Box>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={onCansel}>Відмінити</Button>
        <Button onClick={onSubmit}>Підтвердити</Button>
      </DialogActions>
    </Dialog>
  )
}
