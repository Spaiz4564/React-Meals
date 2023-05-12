import React, { useState } from 'react'
import { mealsService } from '../../services/meals.service'

export default function Checkout(props) {
  const [userInput, setUserInput] = useState({})
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  })

  const onUserInput = ({ target }) => {
    const inputId = target.id
    let value = target.value
    switch (target.type) {
      case 'number':
      case 'range':
        value = +value
        break
      case 'checkbox':
        value = target.checked
        break
      default:
        break
    }
    setUserInput(userInput => {
      return { ...userInput, [inputId]: value }
    })
  }

  const isEmpty = value => (!value ? true : value.trim() === '')

  const isFiveChars = value => (!value ? false : value.trim().length >= 5)

  const confirmHandler = ev => {
    ev.preventDefault()
    const { name, street, postal, city } = userInput
    const enteredNameIsValid = !isEmpty(name)
    const enteredStreetIsValid = !isEmpty(street)
    const enteredCityIsValid = !isEmpty(city)
    const enteredPostalIsValid = isFiveChars(postal)

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid

    if (!formIsValid) return
    props.onSubmitOrder(userInput)
  }

  const nameControlClass = `control ${formInputsValidity.name ? '' : 'invalid'}`
  const streetControlClass = `control ${
    formInputsValidity.street ? '' : 'invalid'
  }`
  const postalCodeControlClass = `control ${
    formInputsValidity.postalCode ? '' : 'invalid'
  }`
  const cityControlClass = `control ${formInputsValidity.city ? '' : 'invalid'}`

  return (
    <form className='checkout-form' onSubmit={confirmHandler}>
      <div className={nameControlClass}>
        <label htmlFor='name'>Your Name</label>
        <input onChange={onUserInput} type='text' id='name' />
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlClass}>
        <label htmlFor='street'>Street</label>
        <input onChange={onUserInput} type='text' id='street' />
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={postalCodeControlClass}>
        <label htmlFor='postal'>Postal Code</label>
        <input onChange={onUserInput} type='text' id='postal' />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code</p>
        )}
      </div>
      <div className={cityControlClass}>
        <label htmlFor='city'>City</label>
        <input onChange={onUserInput} type='text' id='city' />
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className='checkout-actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className='submit'>Confirm</button>
      </div>
    </form>
  )
}
