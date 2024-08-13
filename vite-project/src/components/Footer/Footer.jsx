import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="Footer" id="footer">
       <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>"Stay tuned for the freshest updates and delectable delights! Join our social media community and indulge in a feast for the eyes. Follow us for the latest dishes, exclusive offers, and culinary inspirations. Let's share the love for food together!"</p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt=""/>
            <img src={assets.twitter_icon} alt=""/>
            <img src={assets.linkedin_icon} alt=""/>
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
       </div>
       <hr/>
       <p className="footer-copyright">
         Copyright 2024 © Tomato.com - All Right Reserved.
       </p>
    </div>
  )
}

export default Footer
