import React from 'react'
import { data } from './data'
import { Link } from "react-router-dom";
import './item.scss'

export const ProudProducts = () => {
  const filteredData = data.filter((data) => data.id <= 8);
  return (
    <>
      <div className='proud'>
        <div className='container'>
          <h1 >Products we are proud of</h1>
          <div className='grid-container'>
            {filteredData.map(product => (
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`/categories/product/${product.id}`}
              >
                <div className='item' key={product.id}>
                  < figure>
                    <img src={product.urlImg} />
                  </figure>
                  <div className='info-product'>
                    <h2> {product.nameProduct} </h2>
                    <p className='price'>${product.priceProduct}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
