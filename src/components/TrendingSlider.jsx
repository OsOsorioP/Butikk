import React from 'react'
import { Link } from "react-router-dom";
import { data } from './data'
import './CardSlider.scss'
import  Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TrendingSlider = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const filteredData = data.filter((data) => data.id <= 8);
    return (
        <div className='card'>
            <div className='container'>
                <h1>Trending Now</h1>
                <Slider {...settings}>
                    {filteredData.map(product => (
                        <div className='content' key={product.id}>
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
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
