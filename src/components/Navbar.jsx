import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.scss'
import './CartProductList.scss'

export const Navbar = ({ allProducts, setAllProducts, total, countProduct, setTotal, setCountProduct }) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(false);

    const onDeleteProduct = (product) => {
        const result = allProducts.filter(
            item => item.id !== product.id
        )
        setCountProduct(countProduct - product.quantity)
        setTotal(total - product.priceProduct * product.quantity)
        setAllProducts(result)
    }

    const onClearProducts = () => {
        setTotal(0)
        setAllProducts([])
        setCountProduct(0)
    }
    

    const onAddCount = (product) => {
        if(product.quantity >= 1){
            product.quantity = product.quantity + 1;
        countProduct = countProduct + 1
        setCountProduct(countProduct)
        setTotal(total + product.priceProduct)
        }
    }


    const onRemoveCount = (product) => {
        if(product.quantity > 1){
            product.quantity = product.quantity - 1;
            setCountProduct(countProduct - 1)
            setTotal(total - product.priceProduct)
        }
    }

    return (
        <>
            <nav>
                <div className='nav-contect'>
                    <div className='Header'>
                        <div className='logo-box'>
                            <Link onClick={() => window.scrollTo(0, 0)} to="/"> <div className='logo'></div> </Link>
                        </div>
                        <h1 >   <Link onClick={() => window.scrollTo(0, 0)} to="/"> Butikk </Link></h1>
                    </div>

                    <ul>
                        <li>
                            <Link className='closed' onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                                Categories
                            </Link>
                        </li>
                        <li >
                            <Link className='closed' onClick={() => window.scrollTo(0, 0)} to="/categories/lamps">
                                Lamps
                            </Link>
                        </li>
                        <li >
                            <Link className='closed' onClick={() => window.scrollTo(0, 0)} to="/categories/chairs">
                                Chairs
                            </Link>
                        </li>
                        <li>
                            <span onClick={() => setActive(!active)} className='bolsa'><p>{countProduct}</p></span>

                        </li>
                        <li>
                            <span onClick={() => setMenuOpen(true)}><svg className='mobile-menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                            </svg></span>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={active ? "opac-bg" : "hidden-cart"}>
                <div className='cart-container'>
                    {
                        allProducts.length ? (
                            <>
                                <div className='cart-header'>
                                    <div className='cart-title'><h2>Your Shopping Cart ({countProduct} items)</h2></div>
                                    <div className="cart-close" onClick={() => setActive(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(0,0,0,1)">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="cart-body">
                                    {allProducts.map(product => (
                                        <>
                                            <div className="cart-item" key={product.id}>
                                                <div className="cart-item-left">
                                                    <img src={product.urlImg} alt="product img" class="cart-item-img" layout="fill" />
                                                </div>
                                                <div className="cart-item-mid">
                                                    <h4 className="cart-item-title">{product.nameProduct}</h4>
                                                    <span className="cart-item-code">Code:{product.id}</span>
                                                    <div className="gnt-changer-container">
                                                        <div className="cart-qnt-changer qnt-minus" onClick={() => onRemoveCount(product)} >
                                                            <span>−</span>
                                                        </div>
                                                        <div className="cart-qnt">{product.quantity}</div>
                                                        <div className="cart-qnt-changer qnt-plus" onClick={() => onAddCount(product)} >
                                                            <span>+</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-item-right">
                                                    <div className="cart-item-price">${product.priceProduct}</div>
                                                    <div className="cart-item-remove" onClick={() => onDeleteProduct(product)}>
                                                        <span>✖</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </>

                                    ))}
                                </div>
                                <div className="cart-footer">
                                    <div className="cart-footer-title">Subtotal</div>

                                    <span className="subtotal">${total}</span>
                                    <div className='btns-box'>
                                        <button className="add-to-cart-btn" onClick={() => onClearProducts()}>Clear Cart</button>
                                        <button className="add-to-cart-btn">Go to Checkout</button>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='cart-header'>
                                    <div className='cart-title'><h2>Your Shopping Cart (0 items)</h2></div>
                                    <div className="cart-close" onClick={() => setActive(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" fill="rgba(0,0,0,1)">
                                            </path>
                                        </svg>
                                    </div>
                                </div>

                                <p> Cart Empty</p>
                            </>
                        )
                    }
                </div>
            </div>

            <div className={menuOpen ? "mobile-content open-menu" : "mobile-content closed-menu"}>
                <span onClick={() => setMenuOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg></span>
                <ul className='mobile-nav'>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                            Categories
                        </Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link onClick={() => window.scrollTo(0, 0)} to="/categories/lamps">
                            Lamps
                        </Link>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <Link onClick={() => window.scrollTo(0, 0)} to="/categories/chairs">
                            Chairs
                        </Link>
                    </li>
                </ul>
            </div>


        </>
    )
}
