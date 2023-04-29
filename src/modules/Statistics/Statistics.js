import React, { useEffect } from 'react'
import SalesAtTables from './components/SalesAtTables'
import AmountOfSalesByWaiters from './components/AmountOfSalesByWaiters'
import { Container } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getSalesList } from '../../store/actions/servicesActions'
import { getTableList } from '../../store/actions/tablesActions'
import { selectStatisticsList } from '../../store/selectors/selectors'
import { getPersonnelList } from '../../store/actions/personnelActions'
import WaitersSalary from './components/WaitersSalary'

export default function Statistics() {
  const dispatch = useDispatch();
  const salesList = useSelector(selectStatisticsList);

  useEffect(() => {
    dispatch(getSalesList('sales'));
    dispatch(getTableList('tables'));
    dispatch(getPersonnelList('personnel'));
  }, [dispatch])

  return (
    <Container style={{display: 'flex', flexWrap: 'wrap', paddingBottom: 80}}>
        <SalesAtTables sales={salesList} />
        <AmountOfSalesByWaiters sales={salesList} />
        <WaitersSalary sales={salesList}/>
    </Container>
  )
}
