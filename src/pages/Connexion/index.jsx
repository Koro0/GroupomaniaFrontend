import { } from 'react-router-dom'
import Login from './LogIn'
import Register from './Register'

function Connexion() {
    return (
        <div>
            <h1 className='texte-center'>Connexion</h1>
            <div className='contents row'>
                <Login />
                <div className='col-sm-1 middle-border'></div>
                <div className='col-sm-1'></div>
                <Register />
            </div>
        </div>
    )
}
export default Connexion