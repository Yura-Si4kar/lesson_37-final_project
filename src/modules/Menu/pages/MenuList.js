import React, { useEffect } from 'react'
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenuList } from '../../../store/selectors/selectors';
import MenuListItem from '../components/menu/MenuListItem';
import OrderPopupBtn from '../components/Order/PopupBtn/OrderPopupBtn';
import { useParams } from 'react-router-dom';
import { addMenuItemToOrderList, getMenuList, overwriteOrderListItem, removeOrderItem, setOrderList } from '../../../store/actions/servicesActions';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function MenuList() {
  const STORAGE_KEY = 'orders';
  const dispatch = useDispatch();
  const params = useParams();
  const [orders, setOrders] = useLocalStorage(STORAGE_KEY, []);
  const list = useSelector(selectMenuList);

  useEffect(() => {
    dispatch(getMenuList(params.item))
    dispatch(setOrderList(orders))
  }, [dispatch, params.item, orders])  

  function addOrder(item) {
    setOrders([...orders, item]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(item));
    dispatch(addMenuItemToOrderList(item));
  }

  function deleteOrder(id) {
    setOrders(orders.filter((order) => order.id !== id));
    dispatch(removeOrderItem(id))
  }

  function overwriteOrder(id, changes) {
    const order = orders.find((item) => item.id === id);
    const newOrder = { ...order, numbers: changes }
    
    setOrders(orders.map((order => order.id !== id ? order : newOrder)));
    dispatch(overwriteOrderListItem(newOrder));
  }

  function clearOrderList() {
    orders.splice(0, orders.length);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }

  return (
    <>
      <Container maxWidth='1300px'>
        <div className='dishes-list'>
          {list.map((item) => <MenuListItem
            key={item.id}
            type={item}
            handleAddClick={addOrder}
          />)}
        </div>
      </Container>
      <OrderPopupBtn
        deleteItem={deleteOrder}
        overwriteElement={overwriteOrder}
        clearStorage={clearOrderList}
      />
    </>
  )
}