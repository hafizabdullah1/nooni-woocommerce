import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Relative() {

  const [relate, setRealte] = useState([])

  let relateData = () => {
    axios.get('https://fakestoreapi.com/products?limit=4').then((res) => {
      setRealte(res.data)
    })
  }

  useEffect(() => {
    relateData()
  }, [])


  return (
    <>
      <h1 className='pro'>relative products</h1>
      <div className="modern">
        {relate.map((obj, i) => {
          return (
            <Link to={`/product/${obj.id}`}>
              <div className="best" key={i}>
                <div>
                  <img src={obj.image} alt="" />
                  <button>select option</button>
                </div>
                <div>
                  <h3>{obj.category}</h3>
                  <h2>${obj.price}</h2>
                </div>
              </div>
            </Link>
          )
        })}

      </div>
    </>
  )
}

export default Relative
