import { } from 'react-router-dom'
import Login from './LogIn'
import Register from './Register'

function Connexion() {
    return (
        <div>
            <h1 className='texte-center'>Connexion</h1>
            <div className='contents'>
                <Login />
                <Register />
            </div>
        </div>
    )
}
export default Connexion