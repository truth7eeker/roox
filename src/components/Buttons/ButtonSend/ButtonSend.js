import React from 'react'
import styles from './ButtonSend.scss'

function ButtonSend(props) {
  const buttonStyle = props.isDisabled ? 'button-send-disabled' : 'button-send-active'
    
  return (
    <button className={`button-send ${buttonStyle}`}>{props.children}</button>
  )
}

export default ButtonSend