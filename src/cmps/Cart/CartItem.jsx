import React from 'react'

export default function CartItem({ item, onRemove, onAdd }) {
  const price = `$${item.price.toFixed(2)}`
  return (
    <li className='cart-item'>
      <div>
        <h2>{item.name}</h2>
        <div className='summary'>
          <span className='price'>{price}</span>
          <span className='amount'>x {item.amount}</span>
        </div>
      </div>
      <div className='cart-actions'>
        <button onClick={() => onRemove(item.id)}>−</button>
        <button onClick={() => onAdd(item)}>+</button>
      </div>
    </li>
  )
}
