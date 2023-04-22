import React, { useEffect } from 'react'
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenuList } from '../../../store/selectors/selectors';
import RecipeReviewCard from '../components/menu/MenuListItem';
import FullOrderPopupBtn from '../components/Order/FullOrderPopupBtn';
import { useParams } from 'react-router-dom';
import { getMenuList } from '../../../store/actions/servicesActions';

export default function MenuList() { 
  const dispatch = useDispatch();
  const params = useParams();
  const list = useSelector(selectMenuList);

  useEffect(() => {
    dispatch(getMenuList(params.item))
  }, [dispatch, params.item])  

  return (
    <>
      <Container maxWidth='1300px'>
        <div className='dishes-list'>
          {list.map((item) => <RecipeReviewCard key={item.id} type={item} />)}
        </div>
      </Container>
      <FullOrderPopupBtn />
    </>
  )
}