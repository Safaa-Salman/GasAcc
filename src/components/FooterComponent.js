/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                    <h4 className="mx-auto mb-4 max-auto" id="footer" >Keep in Touch</h4>
            </div>
            <div className="row justify-content-center mb-4 ">             
                <div className="col-12 overflow-auto">
                    <div id="social-icon">
                        <a href="https://www.instagram.com/?hl=en"> <img src="images/Social_Media1.png"/></a>
                        <a href="http://www.facebook.com/profile.php?id="> <img src="images/Social_Media2.png"/></a>
                        <a href="https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome"> <img src="images/Social_Media3.png"/></a>
                        <a href="https://twitter.com/LOGIN"> <img src="images/Social_Media4.png"/></a>
                        <a href="#"> <img src="images/Social_Media5.png"/></a>
                        <a href="http://www.linkedin.com/in/"><img src="images/Social_Media6.png"/></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6">
                    <img src="images/logo.png" width="140" height="70"/>
                    <p>Gasacc is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laboriosam ipsum? Fuga obcaecati numquam consequuntur culpa, quidem neque enim illo iusto temporibus commodi maxime itaque aperiam, amet velit excepturi quisquam?</p>
                    <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		            <i className="fa fa-envelope fa-lg"></i>:info@mywebsite.com<a href="mailto:info@mywebsite.com"></a>
                </div>             
                <div className="col-4 offset-1 col-sm-2 mt-4">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>
                        <li><Link to='/contactus'>Term and Conditions</Link></li>
                    </ul>
                </div>
                <div className="col-4 offset-1 col-sm-2 mt-4">
                    <h5>Help</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/'>Tutorials</Link></li>
                        <li><Link to='/'>Guides</Link></li>
                        <li><Link to='/'>Examples</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;