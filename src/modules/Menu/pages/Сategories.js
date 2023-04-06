import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Сategories() {
  return (
    <Container>
      <div className='categories'>
        <ul className='categories_list'>
          <li className='categories_list-item categories_list-item_img-01'>
            <Link to={'breakfast'}>Сніданки</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-02'>
            <Link to={'potato_pancake'}>Деруни</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-03'>
            <Link to={'snack'}>Закуски</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-04'>
            <Link to={'first-courses'}>Перші страви</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-05'>
            <Link to={'salads'}>Салати</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-06'>
            <Link to={'main'}>Основні страви</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-07'>
            <Link to={'hosper'}>Хоспер меню</Link>
          </li>
          <li className='categories_list-item categories_list-item_img-08'>
            <Link to={'vareniks'}>Вареники</Link>
          </li>
        </ul>
      </div>
    </Container>
  )
}