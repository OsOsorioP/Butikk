import React from 'react'
import img from '../img/banner/banner.jpg'
import './Banner.scss'
import { Link } from "react-router-dom";

export const Banner = ({ title, text }) => {
  return (
    <>
      <div class="banner">
        <div class="container">
          <div class="banner-container">
            <div class="text-side">
              <div class="text">
                <h2>{title}</h2>
                <p> {text} </p>
                <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                  <button>Shop now</button>
                </Link>
              </div>
            </div>
            <div class="img-side">
              <img src={img} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
