import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import RecipeReviewCard from './menu/MenuListItem';
import { selectMenuList } from '../../../store/selectors/selectors';

export default function MenuListByCategories() {
  const params = useParams();
  let list = useSelector(selectMenuList).filter((item) => item.type === params.item);

  return (
    <Container maxWidth='xl'>
      <Box>
        <Typography variant='h1' style={{fontSize: '25px'}}>{params.item}</Typography>
      </Box>
      <div className='dishes-list'>
        {list.map((item) => <RecipeReviewCard key={item.id} type={item} />)}
      </div>
    </Container>
  )
}