import { Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Сategories() {
  return (
    <Container>
      <div className='categories'>
        <ul className='categories_list'>
          <li className='categories_list-item'>
            <Link to={'breakfast'}>Сніданки</Link>
          </li>
          <li className='categories_list-item'>
            <Link to={'potato_pancake'}>Деруни</Link>
          </li>
          <li className='categories_list-item'>
            <Link to={'snack'}>Закуски</Link>
          </li>
          <li className='categories_list-item'>
            <Link to={'first-courses'}>Перші страви</Link>
          </li>
          <li className='categories_list-item'>
            <Link to={'salads'}>Салати</Link>
          </li>
          <li className='categories_list-item'>
            <Link to={'main'}>Основні страви</Link>
          </li>
          <li className='categories_list-item'>
            <Link to={'hosper'}>Хоспер меню</Link>
          </li>
          <li className='categories_list-item'>
            <Link to={'vareniks'}>Вареники</Link>
          </li>
        </ul>
      </div>
    </Container>
  )
}