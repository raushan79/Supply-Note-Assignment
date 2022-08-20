import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'

const App = () => {
  return (
    <div>     

    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
      
    </div>
  )
}

export default App
