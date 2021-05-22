/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center mt-4">
                <div className="col-12 col-sm-5  mt-4">
                    <img src="images/logo_light.png" width="140" height="70"/>
                    <p>Gasacc is a startup that helps gas station owners to manage their buisness Fuga, laboriosam ipsum? Fuga obcaecati numquam consequuntur culpa?</p>
                    <FaPhoneAlt /> : +852 1234 5678 <br />
		            <FaEnvelope/> : <a href="mailto:info@mywebsite.com">info@mywebsite.com</a><br/>
                    <a href="#"> <FaWhatsapp className="social mt-3" /></a>
                    <a href="http://www.facebook.com/profile.php?id="> <FaFacebookF className="social mt-3" /></a>
                    <a href="https://www.instagram.com/?hl=en"> <FaInstagram className="social mt-3"/></a>
                    <a href="https://twitter.com/LOGIN"> <FaTwitter className="social mt-3"/></a>
                    <a href="http://www.linkedin.com/in/"> <FaLinkedinIn className="social mt-3"/></a>
                </div>             
                <div className="col-4 offset-1 col-sm-3">
                    <h5>QUICK LINKS</h5>
                    <ul className="list">
                    <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                        <li><Link to='/contactus'>Term and Conditions</Link></li>
                    </ul>
                </div>
                <div className="col-4 offset-1 col-sm-2">
                    <h5>HELP</h5>
                    <ul className="list">
                        <li><Link to='/'>Tutorials</Link></li>
                        <li><Link to='/'>Guides</Link></li>
                        <li><Link to='/'>Examples</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center mt-3">             
                <div className="col-auto">
                    <p>© Copyright 2020</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;