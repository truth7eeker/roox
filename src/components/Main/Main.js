import React from 'react'
import styles from './Main.scss'

function Main(props) {
  return (
    <div className='main'>
      {props.children}
    </div>
  )
}

export default Main