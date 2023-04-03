import React from 'react';
import { Container, Grid } from '@mui/material';
import { selectTablesList } from '../../store/selectors/selectors';
import TablesItem from './components/TablesItem';
import { useSelector } from 'react-redux';

export default function Tables() {
  const tables = useSelector(selectTablesList);

  return (
    <Container style={{paddingTop: 20}}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {tables.map((item) => <TablesItem key={item.id} table={item} />)}
        </Grid>
      </Grid>
    </Container>
  );
}