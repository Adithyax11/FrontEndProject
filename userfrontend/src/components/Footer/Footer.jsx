import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo_bottom} alt="" />
                <p> Kick-off is a full-stack project created by Adithya Bijoy as part of his exploration into modern web development. This solo project showcases his hands-on approach to learning and building real-world applications while enhancing his front-end skills.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>Get in touch</h2>
                <ul>
                    <li>+91 7025757724</li>
                    <li>adithyabijoy17@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © Kick-Off. All rights reserved.</p>
    </div>
  )
}

export default Footer