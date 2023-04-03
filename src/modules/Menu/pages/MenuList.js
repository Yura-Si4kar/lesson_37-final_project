import React from 'react'
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';
import { selectMenuList } from '../../../store/selectors/selectors';
import RecipeReviewCard from '../components/menu/MenuListItem';
import FullOrderPopupBtn from '../components/Order/FullOrderPopupBtn';

export default function BestMenuList() { 
  const list = useSelector(selectMenuList);

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