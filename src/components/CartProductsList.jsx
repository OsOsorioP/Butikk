import React from 'react'
import './CartProductList.scss'

export const CartProductsList = ({ actived }) => {
  return (
    <div className='opac-bg'>
      <div className={`cart-container ${actived ? '' : 'hidden-cart'}`}>
        <div className='cart-header'>
          <div className='cart-title'><h2>Your Shopping Cart (0 items)</h2></div>
          <div class="cart-close" onClick={()=> !actived}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(0,0,0,1)">
              </path>
            </svg>
          </div>
        </div>
        <div class="cart-body">
          <div class="cart-item">
            <div class="cart-item-left">
              <img src="https://cdn.sanity.io/images/0309uc88/production/9de68f71674b6ed70665b2dce36606115e251086-1260x1260.jpg" alt="product img" class="cart-item-img" layout="fill" />
            </div>
            <div class="cart-item-mid">
              <h4 class="cart-item-title">Pop-Up Toaster, White, 45cm</h4>
              <span class="cart-item-code">8486565498562</span>
              <div class="gnt-changer-container">
                <div class="cart-qnt-changer qnt-minus">
                  <span>−</span>
                </div>
                <div class="cart-qnt">1</div>
                <div class="cart-qnt-changer qnt-plus">
                  <span>+</span>
                </div>
              </div>
            </div>
            <div class="cart-item-right">
              <div class="cart-item-price">49.00$</div>
              <div class="cart-item-remove">
                <span>✖</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cart-footer">
          <div class="cart-footer-title">Subtotal</div>
          <div class="subtotal-container">
            <span class="subtotal">49$</span>
            <button class="add-to-cart-btn">Go to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
