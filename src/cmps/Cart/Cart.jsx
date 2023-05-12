import React, { useContext, useEffect, useState } from 'react'
import CartModule from './CartModule'
import { CartContext } from '../../store/cart-store'
import CartItem from './CartItem'
import Checkout from './Checkout'
import { mealsService } from '../../services/meals.service'

export default function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartItemRemove = id => {
    cartCtx.removeItem(id)
  }

  const cartItemAdd = item => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const submitOrder = async userData => {
    setIsSubmitting(true)
    try {
      const response = await mealsService.postOrder(userData, cartCtx.items)
      setIsSubmitting(false)
      setDidSubmit(true)
      cartCtx.clearCart()
    } catch (err) {
      console.log(err)
      setIsSubmitting(false)
    }
  }

  const cartItems = (
    <ul className='cart-items'>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          onRemove={cartItemRemove.bind(null, item.id)}
          onAdd={cartItemAdd.bind(null, item)}
          item={item}
        />
      ))}
    </ul>
  )

  const orderHandler = () => {
    setIsCheckout(true)
  }

  const modalActions = (
    <div className='actions'>
      <button onClick={props.closeModal} className='button--alt'>
        Close
      </button>
      {hasItems && (
        <button onClick={orderHandler} className='cartBtn'>
          Order
        </button>
      )}
    </div>
  )

  const cartModalContent = (
    <>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onSubmitOrder={submitOrder} onCancel={props.closeModal} />
      )}
      {!isCheckout && modalActions}
    </>
  )

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className='checkout-actions'>
        <button onClick={props.closeModal} className='submit'>
          Close
        </button>
      </div>
    </>
  )

  return (
    <CartModule closeModal={props.closeModal}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {didSubmit && didSubmitModalContent}
    </CartModule>
  )
}
