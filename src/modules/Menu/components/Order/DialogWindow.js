import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import OrderList from './OrderList'

export default function FullOrderPopupBtn({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      style={{position: 'fixed', bottom: 50, right: 28}}
      >
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">Замовлення</DialogTitle>
      <DialogContent>
        <OrderList/>
      </DialogContent>
      
      <DialogActions>
        <Button onClick={handleClose}>Відмінити</Button>
        <Button onClick={handleClose}>Підтвердити</Button>
      </DialogActions>
    </Dialog>
  )
}
