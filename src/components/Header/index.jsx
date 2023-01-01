import React from 'react'
import Logo from '../Logo/logo'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import Context from "../Context";

const Header = () => {
    const [isLogged, setIslogged] = useState(false)
    const { logged } = useContext(Context)
    const [buttonClass, setButtonClass] = useState(false)
    const handleLogOut = () => {
        localStorage.clear()
        setIslogged(false)
    }
    const isConnected = () => {
        if (isLogged || logged) {
            return (<Nav.Link href="/" onClick={handleLogOut}>Deconnect</Nav.Link>)
        } else { return null }
    }

    useEffect(() => {
        (localStorage.getItem('connect') && setIslogged(true))
    }, [])

    const handleClick = (event) => {
        setButtonClass(!buttonClass)
    }

    return (
        <header>
            <Navbar className={buttonClass ? "navbar_extend" : ""}>
                <Nav.Link href={isLogged || logged ? "/home" : "#"} className='logoSvg'>
                    <Logo />
                </Nav.Link>
                <button class="nav-toggle showMenu" type="button" onClick={handleClick} data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='navUl'>
                    <ul className={buttonClass ? "navbar-nav me-auto" : "navbar-nav me-auto maskNav"}>
                        <li className="nav-item">
                            <Nav.Link href={isLogged || logged ? "/home" : "#"}>Home</Nav.Link>
                        </li>
                        <li className='nav-item'>
                            <Nav.Link href={isLogged || logged ? "/add_post" : "#"}>Add Post</Nav.Link>
                        </li>
                        <li className='nav-item'>
                            {isConnected()}
                        </li>
                    </ul>
                </div>
            </Navbar>
        </header >
    )
}

export default Header