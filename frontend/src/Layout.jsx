import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import UserContextPRovider from './components/Context/UserContextProvider'


export default function Layout() {
  return (
    <>
    <UserContextPRovider>
      <Navbar/>
      <Outlet/>
      </UserContextPRovider>
     
    </>
  )
}
