import React, { useEffect, useState } from 'react';
import { Button, Container, Grid } from '@mui/material';
import { selectTablesList } from '../../store/selectors/selectors';
import TablesItem from './components/TablesItem';
import { useDispatch, useSelector } from 'react-redux';
import TableDialogForm from './components/TableDialogForm';
import { getTableList } from '../../store/actions/tablesActions';
import { getPersonnelList } from '../../store/actions/personnelActions';

export default function Tables() {
  const dispatch = useDispatch();
  const tables = useSelector(selectTablesList);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  useEffect(() => {
    dispatch(getTableList('tables'));
    dispatch(getPersonnelList('personnel'));
  }, [dispatch])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container style={{ paddingTop: 20 }}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {tables.map((item) => <TablesItem key={item.id} table={item} />)}
        </Grid>
      </Grid>
      <TableDialogForm open={open} handleClose={handleClose}/>
      <Button
          onClick={handleOpen}
          variant='contained'
          style={{ position: 'fixed', top: 100, width: 80, height: 80, right: 40, fontSize: 12, borderRadius: 50 + '%' }}
      >
          Додати столик
      </Button>
    </Container>
  );
}