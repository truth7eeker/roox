import React, { useState } from 'react'
import styles from './Form.scss'
import { ButtonPrimary } from '../../components/Buttons/ButtonPrimary/ButtonPrimary'
import ButtonSend from '../Buttons/ButtonSend/ButtonSend'

function Form(props) {
   const user = props.userInfo

   const [userData, setUserData] = useState({
     name: user.name,
     username: user.username,
     email: user.email,
     street: user.address.street,
     city: user.address.city,
     zipcode: user.address.zipcode,
     phone: user.phone,
     website: user.website,
     comment: ''
   })

   const [isDisabled, setIsDisabled] = useState(true)

   const editInfo = () => {
     setIsDisabled(false)
   }

   const handleChange = (e) => {
    const {name, value} = e.target
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    })
    )}

    const handleBlur = (e) => {
      const {name, value} = e.target
      setUserData(prevData => ({
        ...prevData,
        [name]: value.trim()
      })
      )}


      const regString = /^(?!\s*$).+/
      const regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      const regZipcode = /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/
      const regUsaNaumber = /^(1|1\s)?(\d{3}|\s\d{3}|\-\d{3}|\(\d{3}\))(\s|\-)?(\d){3}(\s|\-)?(\d){4}$/

      const handleSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(userData))
      }

  return (
    <>
        <div className='form-header'>
          <h4>Профиль пользователя</h4>
          <ButtonPrimary handleClick={editInfo}>Редактировать</ButtonPrimary>
        </div>
        
          <form onSubmit={handleSubmit}>
            <div className='form-border'>
                <label>
                Name
                <input 
                type="text" 
                name="name" 
                value={userData.name && userData.name} 
                disabled={isDisabled} 
                onChange={handleChange} 
                required
                onBlur={handleBlur}
                />
            </label>
            <p>{!userData.name.match(regString) && 'Пожалуйста, заполните это поле'}</p> <br/>

            <label>
                Username
                <input 
                type="text" 
                name="username" 
                value={userData.username} 
                disabled={isDisabled}
                onChange={handleChange}
                required
                onBlur={handleBlur}  
                />
            </label>
            <p>{!userData.username.match(regString) && 'Пожалуйста, заполните это поле'}</p> <br/>
            
            <label>
                E-mail
                <input type="email" 
                name="email" 
                value={userData.email} 
                disabled={isDisabled}
                onChange={handleChange}
                required
                onBlur={handleBlur}  
                />
            </label>
            <p>
              {!userData.email.match(regString) ? 'Пожалуйста, заполните это поле' :
              !userData.email.match(regEmail) ? 'Пожалуйста, введите корректный e-mail' : null}
            </p> <br/>
            
            <label>
                Street
                <input 
                type="text" 
                name="street" 
                value={userData.street} 
                disabled={isDisabled}
                onChange={handleChange}
                required
                onBlur={handleBlur} 
                />
            </label>
            <p>{!userData.street.match(regString) && 'Пожалуйста, заполните это поле'}</p> <br/>
            
            <label>
               City
                <input 
                type="text" 
                name="city" 
                value={userData.city} 
                disabled={isDisabled} 
                onChange={handleChange}
                required
                onBlur={handleBlur} 
                />
            </label>
            <p>{!userData.city.match(regString) && 'Пожалуйста, заполните это поле'}</p> <br/>
            
            <label>
                Zip Code
                <input 
                type="text" 
                name="zipcode" 
                value={userData.zipcode} 
                disabled={isDisabled}
                onChange={handleChange}
                required
                onBlur={handleBlur}  
                />
            </label>
            <p>
              {!userData.zipcode.match(regString) ? 'Пожалуйста, заполните это поле' :
              !userData.zipcode.match(regZipcode) ? 'Пожалуйста, введите верный американский индекс' : null
            }
            </p> <br/>
            
            <label>
                Phone
                <input 
                type="text" 
                name="phone" 
                value={userData.phone} 
                disabled={isDisabled}
                onChange={handleChange}
                required
                onBlur={handleBlur}  
                />
            </label>
            <p>
              {!userData.phone.match(regString) ?'Пожалуйста, заполните это поле' :
              !userData.phone.match(regUsaNaumber) ? 'Пожалуйста, введите верный американский номер' : null
            }
            </p> <br/>
            
            <label>
                Website
                <input 
                type="text" 
                name="website" 
                value={userData.website} 
                disabled={isDisabled}
                onChange={handleChange}
                required
                onBlur={handleBlur}  
                />
            </label>
            <p>{!userData.website.match(regString) && 'Пожалуйста, заполните это поле'}</p> <br/>
            
            <label>
                Comment
                <textarea  
                name='comment' 
                cols="30" 
                rows="5" 
                disabled={isDisabled} 
                onChange={handleChange}
                onBlur={handleBlur} 
                />
            </label>
            </div>
            <ButtonSend isDisabled={isDisabled}>Отправить</ButtonSend>
          </form>  
    </>
  )
}

export default Form