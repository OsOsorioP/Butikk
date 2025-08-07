import React from 'react'
import { Link } from "react-router-dom";
import './NewLetter.scss'

export const NewsLetter = () => {
  return (
    <div className='newletter'>
      <div className='container'>
        <h1>COLLECTIONS</h1>
        <div className='links'>
          <Link onClick={() => window.scrollTo(0, 0)} to="/categories/furnitures">FURNITURES</Link>          
          <Link onClick={() => window.scrollTo(0, 0)} to="/categories/electronics">ELECTRONICS</Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/categories/lamps">LAMPS</Link>     
          <Link onClick={() => window.scrollTo(0, 0)} to="/categories/kitchen">KITCHEN</Link>       
          <Link onClick={() => window.scrollTo(0, 0)} to="/categories/chairs">CHAIRS</Link>      
          <Link onClick={() => window.scrollTo(0, 0)} to="/categories/skin-care">SKIN CARE</Link>       </div>
        <h1>JOIN US OUR COMMUNITY</h1>
        <div>
          <p>Subscribe to receive updates</p>
          <form class="form-container">
            <input type="email" name="email" id="nl-email" placeholder="name@gmail.com" />
            <button type="submit" class="nl-submit">Subscribe</button>
          </form>
        </div>
      </div>

    </div>
  )
}
