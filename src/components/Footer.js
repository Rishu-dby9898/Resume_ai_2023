import React from 'react'
import '../css/style.css';
import '../css/reset.css';
import flogo from '../images/flogo.svg';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';
import linkedin from '../images/linkin.svg';


const Footer = () => {
  return (<>
    <footer>
    <div class="container">
        <div class="row flex space-between">
            <div class="col">
                <div class="flogo">
                    <img src={flogo} alt="#"/>
                </div>
            </div>
            <div class="col">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
            <div class="col">
                <ul>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Clients</a></li>
                </ul>
            </div>
            <div class="col">
                <ul>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>
     <div class="copy-right">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p>Copyright @ 2023 masters’ union</p>
                </div>
                <div class="col">
                    <ul>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
                <div class="col">
                    <ul class="social-icon flex">
                        <li>
                            <a href="#"><img src={facebook} alt="#"/></a>
                        </li>
                        <li>
                            <a href="#"><img src={twitter} alt="#"/></a>
                        </li>
                        <li>
                            <a href="#"><img src={linkedin} alt="#"/></a>
                        </li>
                        <li>
                            <a href="#"><img src={instagram} alt="#"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>

 </> )
}

export default Footer
