import React from 'react'
import img from '../img/header/room.jpg'
import img2 from '../img/2.jfif'
import img3 from '../img/3.jfif'
import img4 from '../img/1.jfif'
import './Presentation.scss'
import { Link } from "react-router-dom";

export const Presentation = () => {
    return (
        <>
            <div class="home-container">
                <div class="container">
                    <div class="grid-container">
                        <div class="featured grid-one">
                            <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                                <div id="img1" class="lil-overlay"></div>
                                <img src={img} alt="img1" />
                                <p class="main-description">Butikk your Comfort</p>
                            </Link>
                        </div>
                        <div class="featured grid-two">
                        <Link onClick={() => window.scrollTo(0, 0)} to="/categories/lamps">
                                <div id="img2" class="lil-overlay"></div>
                                <img src={img4} alt="img2" />
                                <p class="main-description">Lamps</p>
                                </Link>
                        </div>
                        <div class="featured grid-four">
                        <Link onClick={() => window.scrollTo(0, 0)} to="/categories/electronics">
                                <div id="img3" class="lil-overlay"></div>
                                <img src={img3} alt="img3" />
                                <p class="main-description">Electronics</p>
                                </Link>
                        </div>
                        <div class="featured grid-four-low">
                        <Link onClick={() => window.scrollTo(0, 0)} to="/categories/chairs">
                            <div id="img4" class="lil-overlay"></div>
                            <img src={img2} alt="img4" />
                            <p class="main-description">Chairs</p>

                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
