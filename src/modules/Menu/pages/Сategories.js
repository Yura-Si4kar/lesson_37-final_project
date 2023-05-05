import { Box, Container, List, ListItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Сategories() {
  return (
    <Container>
      <Box className='categories'>
        <List className='categories_list'>
          <Link to={'bbqs'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>bbqs</ListItem>
          </Link>
          <Link to={'best'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>best-foods</ListItem>
          </Link>
          <Link to={'breads'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>breads</ListItem>
          </Link>
          <Link to={'burgers'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>burgers</ListItem>
          </Link>
          <Link to={'chocolates'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>chocolates</ListItem>
          </Link>
          <Link to={'desserts'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>desserts</ListItem>
          </Link>
          <Link to={'drinks'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>drinks</ListItem>
          </Link>
          <Link to={'fried-chicken'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>fried-chicken</ListItem>
          </Link>
          <Link to={'ice-cream'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>ice-cream</ListItem>
          </Link>
          <Link to={'pizzas'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>pizzas</ListItem>
          </Link>
          <Link to={'porks'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>porks</ListItem>
          </Link>
          <Link to={'sandwiches'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>sandwiches</ListItem>
          </Link>
          <Link to={'sausages'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>sausages</ListItem>
          </Link>
          <Link to={'steaks'} style={{textDecoration: 'none'}}>
            <ListItem style={{backgroundColor: '#121212',display: 'flex', justifyContent: 'center'}} className='categories_list-item'>steaks</ListItem>
          </Link>
        </List>
      </Box>
    </Container>
  )
}