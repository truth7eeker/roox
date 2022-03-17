import React from 'react'
import styles from './Sidebar.scss'
import {ButtonPrimary} from '../Buttons/ButtonPrimary/ButtonPrimary'

function Sidebar(props) {
  return (
    <div className='sidebar'>
        <div className='sidebar-content'>
            <p>Сортировка</p>
            <ButtonPrimary handleClick={props.filterByCity} >
                по городу
            </ButtonPrimary>
            <ButtonPrimary handleClick={props.filterByCompany}>
                по компании
            </ButtonPrimary>
        </div>
    </div>
  )
}

export default Sidebar