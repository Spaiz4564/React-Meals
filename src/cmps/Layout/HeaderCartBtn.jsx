import React, { useContext, useEffect, useState } from 'react'
import { svgService } from '../../services/svg.service'
import { CartContext } from '../../store/cart-store'

function getSvg(iconName) {
  return { __html: svgService.getSvg(iconName) }
}

export default function HeaderCartBtn(props) {
  const [btnHighlight, isBtnHighlight] = useState(false)

  const btnClasses = `${'button'} ${btnHighlight ? 'bump' : ''}`

  const ctx = useContext(CartContext)

  const numOfItmes = ctx.items.reduce((acc, curr) => (acc += curr.amount), 0)

  useEffect(() => {
    if (ctx.items.length === 0) {
      return
    }
    isBtnHighlight(true)
    const timer = setTimeout(() => {
      isBtnHighlight(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [ctx.items])

  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span
        className='icon'
        dangerouslySetInnerHTML={getSvg('cartIcon')}
      ></span>
      <span>Your Cart</span>
      <span className='badge'>{numOfItmes}</span>
    </button>
  )
}
