import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Сategories() {
  return (
    <Container>
      <div className='categories'>
        <ul className='categories_list'>
          <li className='categories_list-item categories_list-item_img-01'>
            <Link to={'bbqs'}>bbqs</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-02'>
            <Link to={'best'}>best-foods</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-03'>
            <Link to={'breads'}>breads</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-04'>
            <Link to={'burgers'}>burgers</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-05'>
            <Link to={'chocolates'}>chocolates</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-06'>
            <Link to={'desserts'}>desserts</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-07'>
            <Link to={'drinks'}>drinks</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-08'>
            <Link to={'fried-chicken'}>fried-chicken</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-08'>
            <Link to={'ice-cream'}>ice-cream</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-08'>
            <Link to={'pizzas'}>pizzas</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-08'>
            <Link to={'porks'}>porks</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-08'>
            <Link to={'sandwiches'}>sandwiches</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-08'>
            <Link to={'sausages'}>sausages</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-08'>
            <Link to={'steaks'}>steaks</Link>
          </li>
        </ul>
      </div>
    </Container>
  )
}