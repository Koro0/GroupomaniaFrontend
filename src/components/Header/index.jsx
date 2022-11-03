import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'


const Header = () => {
    //const userToken = localStorage.getItem('token')
    return (
        <nav>
            <ul className='nav'>
                <li className='navList'>
                    <Link to='/'>
                        <img className='logo' src={logo} alt="Groupomania" />
                    </Link>
                </li>
                <li className='navList'>
                    <Link to='/new_post'>New post</Link>
                </li>
                <li className='navList'>
                    <Link to='/connexion'>Connexion</Link>
                </li>
                <li className='navList'>
                    <Link to='/connexion'>Déconnexion</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header