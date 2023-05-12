import React from 'react'
import ReactDOM from 'react-dom'

const BackDrop = props => {
  return <div onClick={props.onClick} className='backdrop'></div>
}

const ModalOverlay = props => {
  return (
    <div className='modal'>
      <div className='content'>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

export default function CartModule(props) {
  return (
    <>
      <h1>hello</h1>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.closeModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}
