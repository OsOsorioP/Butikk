import React from 'react'
import { Footer } from "../Footer";
import { NewsLetter } from "../NewsLetter";
import { data } from '../data'
import { Link } from 'react-router-dom'

export const Electronics = () => {
  const dataD = data.filter((data) => 'Electronics' === data.categorie)
  return (
    <>
    <div className="proud">
        <div className="container">
          <div className="grid-container">
            {dataD.map((dataD) => (
              <div key={dataD.id} className="product normal">
                <Link
                onClick={() => window.scrollTo(0, 0)}
                to={`/categories/product/${dataD.id}`}
              >
                <div className='item' key={dataD.id}>
                  < figure>
                    <img src={dataD.urlImg} />
                  </figure>
                  <div className='info-product'>
                    <h2> {dataD.nameProduct} </h2>
                    <p className='price'>${dataD.priceProduct}</p>
                  </div>
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NewsLetter/>
      <Footer/>
    </>
  )
}
