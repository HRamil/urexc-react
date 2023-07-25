import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//style
import './../style/components/header.scss'

//image
import logo from './../images/logo.png'

function Header() {
    const [state, setState] = useState(false)
    const [hamburgerMenu, setHamburgerMenu] = useState(false)

    const addClassScroll = () => {
        const scroll = document.documentElement.scrollTop
        if (scroll > 100) {
            setState(true)
        }
        else {
            setState(false)
        }
    }
    window.addEventListener('scroll', addClassScroll)

    function hamburgerSlide() {
        if (hamburgerMenu === false) {
            setHamburgerMenu(true)
            document.body.style.overflow = 'hidden';
        }
        else {
            setHamburgerMenu(false)
            document.body.style.overflow = 'auto';
        }
    }

    return (
        <header className={state ? "bg-color" : null}>
            <div className='mobileHeader'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='hamburger-menu' onClick={hamburgerSlide}>
                    <div className={hamburgerMenu ? 'active' : ''}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={hamburgerMenu ? 'menu hamburgerSlide' : 'menu'}>
                <div className="container">
                    <div className="navLink">
                        <Link to="/">
                            <p>
                                Platform
                            </p>
                        </Link>
                        <Link to="/">
                            <p>
                                Features
                            </p>
                        </Link>
                        <Link to="/">
                            <p>
                                Who we serve
                            </p>
                        </Link>
                        <Link to="/">
                            <p>
                                Resources
                            </p>
                        </Link>
                    </div>
                    <div className='buttons'>
                        <div className='loginButton'>
                            <div className='around'></div>
                            <p>Login/Register</p>
                        </div>
                        <div className='button'>
                            Add a listing
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header