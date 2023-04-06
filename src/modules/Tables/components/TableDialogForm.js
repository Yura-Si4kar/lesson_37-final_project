import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTable } from '../../../store/actions/actions';
import { Typography } from '@mui/material';

const INITIAL_VALUE = {
  name: '',
  img: '',
  error: false,
}

export default function TableDialogForm({ open, handleClose }) {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(INITIAL_VALUE);

  const getInput = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    if(validateFilds(formState.name)
    ) {
      return setFormState({
        ...formState, 
        name: '',
        img: '',
        error: true,
      })
    }
    delete formState.error;
    dispatch(addTable(formState));
    setFormState(INITIAL_VALUE);
    console.log(formState);
    handleClose();
  }

  function validateFilds(input) {
    return input ==='';
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Заповніть поля</DialogTitle>
      <DialogContent>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Введіть ім'я працівника: </Form.Label>
            <Form.Control type='text' name='name' placeholder="Ім'я" onChange={getInput}/>  
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Завантажити фото картки: </Form.Label>
            <Form.Control type='file' name='img' onChange={getInput}/>  
          </Form.Group>
          <Typography paragraph className={'error' + (formState.error ? ' show' : '')}>Wrong! Fill in all fields!</Typography>
        </Form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSubmitForm}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}