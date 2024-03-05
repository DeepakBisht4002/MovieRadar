import React , { useEffect } from 'react'
import Header from './components/Header/Header'
import { SimpleBottomNavgiation } from './index'
import { Outlet } from 'react-router-dom'
function Layout() {

  return (
    <>
      <Header />
      <div className='app'>
        <Outlet />
        <SimpleBottomNavgiation />

      </div></>
  )
}

export default Layout
