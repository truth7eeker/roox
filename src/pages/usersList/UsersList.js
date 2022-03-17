import React from 'react'
import Main from '../../components/Main/Main';
import UserCard from '../../components/userCard/UserCard';



function UsersList(props) {

  const userCardEl = props.users && props.users.map(user => 

    <UserCard id={user.id} 
    key={user.name} 
    name={user.name} 
    address={user.address.city} 
    company={user.company.name} 
    getUser={props.getUser}
    user={user}
    />
  )
  
  return (
    <>
      <Main>
      <h4>Список пользователей</h4>
      {userCardEl}
      </Main>  
    </>
  )
}

export default UsersList