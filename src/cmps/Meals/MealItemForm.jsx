import React, { useState, useRef } from 'react'
import Input from '../UI/Input'

export default function MealItemForm({ meal, onAddToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()
  const submitHandler = ev => {
    ev.preventDefault()
    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }
    onAddToCart(enteredAmountNumber)
  }

  const input = {
    id: meal.id,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  }
  return (
    <form onSubmit={submitHandler} className='form'>
      <Input ref={amountInputRef} label='Amount' input={input} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}
