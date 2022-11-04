import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Logo({ alt, props }) {
    return <img alt={alt} src={props} />
}

const Header = () => {

    return (
        <div>
            <Link to='/home'>
                <Logo alt='Groupomania' src={logo} />
            </Link>
            <nav>
                <ul className='nav'>
                    <li className='navList'>
                        <Link to='/home/new_post'>New post</Link>
                    </li>
                    <li className='navList'>
                        <Link to='/'>Deconnect</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header