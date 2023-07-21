import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//style
import './../style/components/header.scss'

//image
import logo from './../images/logo.png'

function Header() {
const [state, setState] =useState(false)

    const addClassScroll = () => {
        const scroll = document.documentElement.scrollTop
        if (scroll > 200) {
            setState(true)
        }
        else {
            setState(false)
        }
    }
    window.addEventListener('scroll', addClassScroll)
    return (
        <header className={state?"bg-color" : null}>
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
                <div className='logo'>
                    <img src={logo} alt="" />
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
        </header>
    )
}

export default Header