import './index.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Employees from './pages/Employees';
import Header from './components/header';
import Customers from './pages/Customers';
import DictionaryPage from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';
import Customer from './pages/Customer';
import Login from './pages/Login';
import Register from './pages/Register'
import { baseUrl } from './shared';
import CalendarPage from './pages/CalendarPage';

export const LoginContext = createContext(true)

function App() {

    useEffect(() => {
      function refreshToken() {
        if(localStorage.refresh) {
          const url = baseUrl + 'api/token/refresh/'
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh: localStorage.refresh})
          })
          .then((response) => {
            return response.json()
          }).then((data) => {
            localStorage.access = data.access
            localStorage.refresh = data.refresh
            setLoggedIn(true)
          }).catch((err) => {
            console.log(err.message)
          })
        }
      }
      const minute = 1000 * 60
      refreshToken()
      setInterval(refreshToken, minute * 14)
    }, [])
    const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false)
    function changeLoggedIn(value){
      setLoggedIn(value)
      if(value === false){
        localStorage.clear()
      }
    }

  return (
      <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
      <BrowserRouter>
         <Header>
            <Routes>
              <Route path='register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='customers/:id' element={<Customer />} />
              <Route path='/dictionary' element={<DictionaryPage />} />
              <Route path='dictionary/:search' element={<Definition />} />
              <Route path='/calendar' element={<CalendarPage/>} />
              <Route path='/404' element={<NotFound/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
          </Header>
      </BrowserRouter>
    </LoginContext.Provider>
    
  );
}

export default App;
 