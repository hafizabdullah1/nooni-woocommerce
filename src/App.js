import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Components/Screens/HomePage'
import Navbar from './Components/Navbar'
import AddToCart from './Components/Screens/AddToCart'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/product/:id' element={<AddToCart />}></Route>
      </Routes>
      <Footer />
    </>
  )
}
export default App;

// Template link:
// https://demo.theme-sky.com/nooni/