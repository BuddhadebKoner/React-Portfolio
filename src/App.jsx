import './App.css'
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './Components/Footer/Footer'

import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
