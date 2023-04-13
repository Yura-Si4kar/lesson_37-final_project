import React from 'react'
import SalesAtTables from './components/SalesAtTables'
import AmountOfSalesByWaiters from './components/AmountOfSalesByWaiters'
import { Box } from '@mui/material'

export default function Statistics() {
  return (
    <Box style={{display: 'flex', justifyContent: 'space-between'}}>
      <SalesAtTables />
      <AmountOfSalesByWaiters/>
    </Box>
  )
}
