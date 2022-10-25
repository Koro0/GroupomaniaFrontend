import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='/connexion'>Connexion</Link>
        </nav>
    )
}

export default Header