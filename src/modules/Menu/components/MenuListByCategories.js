import React, { useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MenuListItem from './menu/MenuListItem';
import { selectMenuList } from '../../../store/selectors/selectors';
import { getMenuList } from '../../../store/actions/servicesActions';
import OrderPopupBtn from './Order/PopupBtn/OrderPopupBtn';

export default function MenuListByCategories() {
  const dispatch = useDispatch();
  const params = useParams();
  const list = useSelector(selectMenuList);

  useEffect(() => {
    dispatch(getMenuList(params.item))
  }, [dispatch, params.item])   

  return (
    <>
      <Container maxWidth='xl'>
        <Box>
          <Typography variant='h1' style={{fontSize: '25px'}}>{params.item.toLocaleUpperCase()}</Typography>
        </Box>
        <div className='dishes-list'>
          {list.map((item) => <MenuListItem key={item.id} type={item} />)}
        </div>
        <OrderPopupBtn/>
      </Container>
    </>
  )
}