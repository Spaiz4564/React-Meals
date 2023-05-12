import './assets/scss/global.scss'
import Header from './cmps/Layout/Header'
import Meals from './cmps/Meals/Meals'
import Cart from './cmps/Cart/Cart'
import { useState } from 'react'
import { CartContextProvider } from './store/cart-store'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const closeModal = () => {
    setCartIsShown(false)
  }
  const openModal = () => {
    setCartIsShown(true)
  }

  return (
    <CartContextProvider>
      {cartIsShown && <Cart closeModal={closeModal} />}
      <Header openModal={openModal} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  )
}

export default App
