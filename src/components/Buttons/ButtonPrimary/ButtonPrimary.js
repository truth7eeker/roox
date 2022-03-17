 import React from 'react'
 import styles from './ButtonPrimary.scss'
 
export const ButtonPrimary = (props) => {
return <button className="button-primary" onClick={props.handleClick}>
    {props.children}
    </button>
}
 
