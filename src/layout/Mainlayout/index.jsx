import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

function Mainlayout() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    </>
  )
}

export default Mainlayout