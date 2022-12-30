import React from 'react'
import Logo from '../Logo/logo'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
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
            <Navbar className='navbar-expand-md' >
                <NavbarBrand className='logoSvg'>
                    <Logo />
                </NavbarBrand>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav me-auto">
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
            </Navbar>
        </header >
    )
}

export default Header