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

    return (
        <header>
            <Navbar >
                <Nav.Link href={isLogged || logged ? "/home" : "#"} className='logoSvg'>
                    <Logo />
                </Nav.Link>
                <button class="nav-toggle" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className='navUl'>
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item active">
                            <Nav.Link href={isLogged || logged ? "/home" : "#"}>Home</Nav.Link>
                        </li>
                        <li className='nav-item active'>
                            <Nav.Link href={isLogged || logged ? "/add_post" : "#"}>Add Post</Nav.Link>
                        </li>
                        <li className='nav-item active'>
                            {isConnected()}
                        </li>
                    </ul>
                </div>
            </Navbar>
        </header >
    )
}

export default Header