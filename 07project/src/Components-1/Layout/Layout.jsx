import React from 'react'
import Header from '../Header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
        </>
  )
}

export default Layout