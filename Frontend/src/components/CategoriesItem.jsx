import React from 'react'
import { Link } from 'react-router-dom'
import { data } from './data'
import './item.scss'

export const CategoriesItem = () => {
  return (
    <div className="proud">
        <div className="container">
          <div className="grid-container">
            {data.map((data) => (
              <div key={data.id} className="product normal">
                <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`/categories/product/${data.id}`}
              >
                <div className='item' key={data.id}>
                  < figure>
                    <img src={data.urlImg} />
                  </figure>
                  <div className='info-product'>
                    <h2> {data.nameProduct} </h2>
                    <p className='price'>${data.priceProduct}</p>
                  </div>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}
