import React, { useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, List, MenuItem, Select, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { selectOrdersList, selectTablesList } from '../../../../store/selectors/selectors';
import { styled } from '@mui/material/styles';
import OrderListItem from './OrderListItem';
import { clearOrdersList, tieTheOrderToTheTable } from '../../../../store/actions/actions';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function FullOrderPopupBtn({ open, handleClose }) {
  const list = useSelector(selectOrdersList);
  const tables = useSelector(selectTablesList);
  const dispatch = useDispatch();
  
  const [table, setTable] = useState('');

  const getOrdersSum = (list) => {
    return list.reduce((acc, item) => acc + (item.price * item.numbers), 0);
  }

  const handleChange = (event) => {
      setTable(event.target.value);
  };

  function onSubmit() {
    let order = {
      id: Date.now(),
      list,
      name: table,
    }

    dispatch(tieTheOrderToTheTable(order));
    dispatch(clearOrdersList())
    handleClose();
  }

  function onCansel() {
    dispatch(clearOrdersList())
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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Стіл №</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={table}
                    label="Ім'я"
                    onChange={handleChange}
                >
                    {tables.map((table) => <MenuItem key={table.id} value={table.name}>{table.name}</MenuItem>)}
                </Select>
            </FormControl>
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
