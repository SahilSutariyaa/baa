import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import DownToUp from '../commen/DownToUp'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <DownToUp />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
