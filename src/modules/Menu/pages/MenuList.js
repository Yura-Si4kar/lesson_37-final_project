import React, { useEffect } from 'react'
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenuList } from '../../../store/selectors/selectors';
import MenuListItem from '../components/menu/MenuListItem';
import OrderPopupBtn from '../components/Order/PopupBtn/OrderPopupBtn';
import { useParams } from 'react-router-dom';
import { getMenuList, getOrderList } from '../../../store/actions/servicesActions';

export default function MenuList() {
  const dispatch = useDispatch();
  const params = useParams();
  const list = useSelector(selectMenuList);

  useEffect(() => {
    dispatch(getMenuList(params.item))
    dispatch(getOrderList())
  }, [dispatch, params.item])  

  return (
    <>
      <Container maxWidth='1300px'>
        <div className='dishes-list'>
          {list.map((item) => <MenuListItem
            key={item.id}
            item={item}
          />)}
        </div>
      </Container>
      <OrderPopupBtn/>
    </>
  )
}