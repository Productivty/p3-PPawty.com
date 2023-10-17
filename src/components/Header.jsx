import React from 'react'
import './Header.css'
import logo from '../images/logo.webp'


function Header() {
    const navToggle = document.querySelector('.nav-toggle')
    const navLinks = document.querySelector('.nav-link')

    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open')
    })

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open')
        })
    });

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" className='logo-img' />
            </div>

            <button className="nav-toggle" aria-label='toggle navigation'>
                <span className="hamburger"></span>
            </button>


            <nav className="nav">
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href="#home" className='nav-link'>Home</a>
                    </li>
                </ul>

                <ul className='nav-list'>
                    <li className='nav-item'><a href="#about" className='nav-link'>About</a></li>
                </ul>
                <ul className='nav-list'>
                    <li className='nav-item'><a href="#services" className='nav-link'>Services</a></li>
                </ul>

                <ul className='nav-list'>
                    <li className='nav-item'><a href="#contact" className='nav-link'>Contact</a></li>
                </ul>
            </nav>
        </header >


    )
}

export default Header