
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'


const Header = () => {
    /* const [userConnected, setUserConnected] = useState(false)
     useEffect(() => {
         if (localStorage.getItem('token') !== null) {
             setUserConnected(true)
         } else {
             setUserConnected(false)
         }
     }, [])
     useEffect(() => {
         if (userConnected) {
             return <ConnexionBtn />
         } else {
             return <DeconnexionBtn />
         }
     }, [userConnected])
     const ConnexionBtn = () => {
         return <li className='navList'>
             <Link to='/connexion'>Connexion</Link>
         </li>
     }
     const DeconnexionBtn = () => {
         return <li className='navList'>
             <Link to='/connexion'>Déconnexion</Link>
         </li>
     }*/
    return (
        <div>
            <Logo className='logo' />dfdd
            <nav>
                <ul className='nav'>
                    <li className='navList'>
                        <Link to='/new_post'>New post</Link>
                    </li>
                    <li className='navList'>
                        <Link to='/connexion'>Deconnect</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header