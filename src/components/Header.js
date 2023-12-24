import React from 'react'
import '../css/style.css';
import '../css/reset.css';
import logo from '../images/logo.svg';

const Header = () => {
  return (

    <header>
        <div class="container flex space-between">
            <div class="logo">
                <a href="#">
                    <img src={logo} alt="#"/>
                </a>
            </div>
            <div class="button-box">
                <a href="#" class="btn">Sign in</a>
                <a href="#" class="btn2">Create my resume</a>
            </div>
        </div>
        <div class="toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>

  )
}

export default Header
