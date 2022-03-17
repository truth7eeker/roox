import React, {useState, useEffect} from 'react'
import styles from './App.scss'
import Sidebar from './components/Sidebar/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './pages/usersList/UsersList';
import UserProfile from './pages/userProfile/UserProfile';


function App() {
  const [users, setUsers] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  // Get data
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  // Filter data
  const filterByCity = () => {
    const newUsers = [...users]
    const cities = []
    newUsers.map(user => cities.push(user.address.city))
    cities.sort()

    const filtered = []
    cities.map(city => {
      newUsers.map(user => {
        if(city === user.address.city) {
          filtered.push(user)
        }
      })
    })
    setUsers(filtered)
  }

  const filterByCompany = () => {
    const newUsers = [...users]
    const companies = []
    newUsers.map(user => companies.push(user.company.name))
    companies.sort()

    const filtered = []
    companies.map(company => {
      newUsers.map(user => {
        if(company === user.company.name) {
          filtered.push(user)
        }
      })
    })
    setUsers(filtered)
  }

  // Get user info 
  const getUser = (user) => {
    setUserInfo(user)
  }
 
  
  return (
     <Router >
     <div className='app'>
     <Sidebar filterByCity={filterByCity} filterByCompany={filterByCompany} />
     {users ?
     <Routes>
         <Route path='/roox' exact element={<UsersList users={users} getUser={getUser} />} />
         <Route path='roox/user-profile' element={<UserProfile users={users} userInfo={userInfo} />} />
    </Routes>
    :
    <p className='loader'>Loading...</p>
     }
    </div>
     </Router>
  )
}

export default App;