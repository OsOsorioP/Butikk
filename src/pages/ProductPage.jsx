import { React, useState } from "react";
import { data } from "../components/data";
import { TrendingSlider } from "../components/TrendingSlider";
import { NewsLetter } from "../components/NewsLetter";
import { Footer } from '../components/Footer';
import { useParams } from "react-router";
import '../components/ProductPage.scss'

export const ProductPage = ({allProducts, setAllProducts, countProduct, setCountProduct, total, setTotal }) => {
  const [g , setG]=useState(1)
  const { id } = useParams();
  const item = data.filter((data) => data.id === parseInt(id));

  const onAddProduct = (product) => {
    if (allProducts.find(item => item.id === product.id)) {
      const products = allProducts.map(item => item.id === product.id
        ? { ...item, quantity: item.quantity + product.quantity } : item)

      setCountProduct(countProduct + product.quantity)
      setTotal(total + product.priceProduct * product.quantity)
      return setAllProducts([...products])
    }

    setCountProduct(countProduct + product.quantity)
    setTotal(total + product.priceProduct * product.quantity)
    setAllProducts([...allProducts, product])
  }
 
  const idq = item.map((data) => data.quantity)

  const increase = () => {
    if (idq >= 1) {
      return item.map((data) => data.quantity = data.quantity + 1), setG(item.map((data) => data.quantity))
    }
  };

  const decrease = () => {
    if (idq > 1) {
      return item.map((data) => data.quantity = data.quantity - 1), setG(item.map((data) => data.quantity))
    }
  };

  const returnQ = () => {
    return item.map((data) => data.quantity = data.quantity);
  }


  return (
    <>
      <div className="Product">
        {item.map(product => (
          <div>
            <div className="container" key={product.id}>
              <div className="img-box">
                <figure>
                  <img src={product.urlImg} alt={product.nameProduct} />
                </figure>
              </div>
              <div className="description-box">
                <h1>{product.nameProduct}</h1>
                <p>{product.description}</p>
                <div className="quantity-box">
                  <h1 className="text">Quantity:</h1>
                  <div className='btns'>
                    <button className="btn-minus" onClick={decrease}>
                      <i class="fa-solid fa-minus"></i>
                    </button>
                    <h3>{returnQ()}</h3>
                    <button className="btn-plus" onClick={increase}>
                      <i class="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <h2 className="text2">${product.priceProduct}</h2>
                </div>
                <div className="payments-box">
                  <button className="btn-agg" onClick={() => onAddProduct(product)}>
                    ADD TO CART
                  </button>
                  <button className="btn-buy">BUY NOW</button>
                </div>
              </div>
            </div>
            <div className="details-box">

              <div  className="info-box">
                <h1>{product.infos.info1.title}</h1>
                <p>{product.infos.info1.text}</p>
              </div>
              <div className="info-box">
                <h1>{product.infos.info2.title}</h1>
                <p>{product.infos.info2.text}</p>
              </div>
              <div className="info-box">
                <h1>{product.infos.info3.title}</h1>
                <p>{product.infos.info3.text}</p>
              </div>
              <div className="info-box">
                <h1>{product.infos.info4.title}</h1>
                <p>{product.infos.info4.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <TrendingSlider />
      <NewsLetter />
      <Footer />
    </>
  )
}
