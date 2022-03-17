import React from 'react'
import {Link} from 'react-router-dom'
import styles from './UserCard.scss'

function UserCard(props) {
  return (
    <div className='user-card'>
        <p><span>ФИО:</span> {props.name} </p>
        <p><span>город:</span> {props.address} </p>
        <p><span>компания:</span> {props.company} </p>
        <Link className='learn-more' to='./user-profile' onClick={() => props.getUser(props.user)}>Подробнее</Link>
    </div> 
  )
}

export default UserCard