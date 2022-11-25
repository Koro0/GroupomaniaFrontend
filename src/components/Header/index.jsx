import React from 'react'
import Logo from '../Logo/logo'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';


const Header = () => {
    // const { toggleLogged, logged } = useContext(LoggedContext)
    const handleLogOut = () => {
        localStorage.clear()
    }
    return (
        <div>
            <Navbar className='navbar' variant="light">
                <Container>
                    <NavbarBrand className='logoSvg'>
                        <Logo />
                    </NavbarBrand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/home/new_post">Add Post</Nav.Link>
                        <Nav.Link href="/" onClick={handleLogOut}>Deconnect</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    )
}

export default Header