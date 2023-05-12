import React, { useContext } from 'react'
import MealItemForm from './MealItemForm'
import { CartContext } from '../../store/cart-store'

export default function MealItem({ meal }) {
  const price = `$${meal.price.toFixed(2)}`
  const cartCtx = useContext(CartContext)

  const addToCart = amount => {
    cartCtx.addItem({ id: meal.id, name: meal.name, amount, price: meal.price })
  }
  return (
    <li className='meal'>
      <div>
        <h3>{meal.name}</h3>
        <div className='description'>{meal.description}</div>
        <div className='price'>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCart} meal={meal} />
      </div>
    </li>
  )
}
