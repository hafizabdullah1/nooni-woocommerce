import React from 'react'
import { Link } from 'react-router-dom'

function Cards({ itemData }) {
  return (
    <>
      <div className="modern">
        <div className="see">
          <h1>Best Modern Furniture</h1>
          <h5>See All &gt;&gt;</h5>
        </div>
        {itemData.map((obj, i) => {
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

export default Cards
