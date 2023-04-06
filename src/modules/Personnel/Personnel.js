import React from 'react'
import { useSelector } from 'react-redux'
import { selectPersonnelList } from '../../store/selectors/selectors'
import { Button, Container, Grid } from '@mui/material';
import PersonnelItem from './components/PersonnelItem';
import PersonnelDialogForm from './components/PersonnelDialogForm';

export default function Personnel() {
  const personnel = useSelector(selectPersonnelList);
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Grid container spacing={1} style={{marginTop: 20}}>
        <Grid container item xs={12} spacing={3}>
          {personnel.map((person) => <PersonnelItem key={person.id} person={person} />)}
        </Grid>
      </Grid>
      <PersonnelDialogForm open={open} handleClose={handleClose}/>
      <Button
        onClick={handleClickOpen}
        variant='contained'
        style={{ position: 'fixed', top: 100, width: 80, height: 80, right: 40, fontSize: 10, borderRadius: 50 + '%' }}
      >
        Додати працівника
      </Button>
    </Container>
  )
}
