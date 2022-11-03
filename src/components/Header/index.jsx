import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Nav = styled.nav`
display: flex;
flex-grow: 1;
margin: auto;
`

const Header = () => {
    return (
        <Nav>
            <Link to='/'>Accueil</Link>
            <Link to='/connexion'>Connexion</Link>
            <Link to='/connexion/login'>Déconnexion</Link>
        </Nav>
    )
}

export default Header