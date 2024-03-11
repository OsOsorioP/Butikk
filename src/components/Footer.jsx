import React from 'react'
import { Link } from "react-router-dom";
import './Footer.scss'

export const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <h1>Information</h1>
                <div className="footer-links">
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">Our Stores</Link>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">FAQ</Link>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">Customer Service</Link>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">Shipping Policies</Link>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">Warranties, Returns and Exchanges</Link>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">Privacy Policy</Link>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">Privacy Statement</Link>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">Sitemap</Link>
                    <Link onClick={() => window.scrollTo(0, 0)} to="/">Black Friday</Link>
                </div>
                <p className="reserved"> ALL RIGHTS RESERVED © BUTIKK - 2024 </p>
            </footer>
        </>
    )
}
