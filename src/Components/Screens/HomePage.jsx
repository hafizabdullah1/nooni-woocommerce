import React, { useState, useEffect } from 'react'
import Home from '../Home'
import Category from '../Category'
import Sale from '../Sale'
import Cards from '../Cards'
import axios from 'axios'
import Blog from '../Blog'
import Wood from '../Wood'

function HomePage() {

  const [item, setItem] = useState([])

  let fetchData = () => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setItem(res.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <>
      <Home />
      <Category />
      <Sale />
      <Cards itemData={item} />
      <Blog />
      <Wood />
    </>
  )
}

export default HomePage
