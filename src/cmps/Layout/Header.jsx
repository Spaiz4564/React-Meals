import React, { useContext } from 'react'
import mealsImage from '../../assets/img/meals.jpg'
import HeaderCartBtn from './HeaderCartBtn'


export default function Header(props) {

  return (
    <>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartBtn onClick={props.openModal} />
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='Table of food' />
      </div>
    </>
  )
}
