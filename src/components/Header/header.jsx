import React, { useState, useEffect, useContext } from 'react'
import Logo from '../Logo/logo'
import Context from "../Context";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const [isLogged, setIslogged] = useState(false)
    const { logged } = useContext(Context)
    //const [buttonClass, setButtonClass] = useState(false)
    const handleLogOut = () => {
        localStorage.clear()
        setIslogged(false)
    }
    const isConnected = (e) => {
        if (isLogged || logged) {
            return null
        } else { return e }
    }
    useEffect(() => {
        (localStorage.getItem('connect') && setIslogged(true))
    }, [])
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={isLogged || logged ? "/home" : "#"}><Logo />{' '}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={isLogged || logged ? "/home" : "#"}>Accueil</Nav.Link>
                        <Nav.Link href={isLogged || logged ? "/add_post" : "#"}>Nouveau Poste</Nav.Link>
                        <Nav.Link className={isConnected('hiddenClass')} href='/' onClick={handleLogOut} > Déconnexion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;