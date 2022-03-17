import React from 'react'
import Form from '../../components/Form/Form'
import Main from '../../components/Main/Main'

function UserProfile(props) {
  return (
    <>
      <Main>
        <Form userInfo={props.userInfo}></Form> 
      </Main>
    </>
  )
}

export default UserProfile