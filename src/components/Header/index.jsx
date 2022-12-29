import React from 'react'
import Logo from '../Logo/logo'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import { useState } from 'react';
import { useEffect } from 'react';


const Header = () => {
    const [isLogged, setIslogged] = useState(false)
    const handleLogOut = () => {
        localStorage.clear()
        setIslogged(false)
    }
    useEffect(() => {
        (localStorage.getItem('connect') && setIslogged(true))
    }, [])
    return (
        <div>
            <Navbar className='navbar' variant="light">
                <Container>
                    <NavbarBrand className='logoSvg'>
                        <Logo />
                    </NavbarBrand>
                    <Nav className="me-auto">
                        <Nav.Link href={isLogged ? "/home" : "/"}>Home</Nav.Link>
                        <Nav.Link href={isLogged ? "/add_post" : "/"}>Add Post</Nav.Link>
                        <Nav.Link href={isLogged ? "/profile" : "/"}>Profile</Nav.Link>
                        {
                            (isLogged && <Nav.Link href="/" onClick={handleLogOut}>Deconnect</Nav.Link>)
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div >
    )
}

export default Header