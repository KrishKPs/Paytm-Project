import { useState } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import './App.css'




import { Signup } from './Pages/Signup'
import { Signin } from './Pages/Signin'
import { Dashboard } from './Pages/Dashboard'
import { Sendmoney } from './Pages/Sendmoney'

function App() {


  return (
    <>

    <BrowserRouter> 

    <Routes> 
      <Route path = "/signup" element={<Signup/> }/>
      <Route path = "/signin" element={<Signin/> }/>
      <Route path = "/dashboard" element={<Dashboard/> }/>
      <Route path = '/sendmoney/:username' element={<Sendmoney/> }/>

    </Routes>
    
    </BrowserRouter>

     
    </>
  )
}

export default App
