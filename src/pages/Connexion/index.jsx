import { Link } from 'react-router-dom'
import Login from './LogIn'
import Register from './Register'
function Connexion() {
    return (
        <div>
            <h1 className='texte-center'>Connexion</h1>
            <Link to='login' ><Login /></Link>
            <Link to='register'><Register /></Link>
        </div>
    )
}
export default Connexion