import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'


const ButtonDeconnect = styled.button`
color: var(--primaire)
`

const Header = () => {
    const handleLogOut = () => {
        localStorage.clear()
    }
    return (
        <div>
            <Link to='/home'>
                <img id='logo' src={Logo} alt='logo'></img>
            </Link>
            <nav>
                <ul className='nav'>
                    <li className='navList'>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className='navList'>
                        <Link to='/home/new_post'>New post</Link>
                    </li>
                    <li className='navList'>
                        <Link to='/'>
                            <ButtonDeconnect onClick={handleLogOut} >Deconnect</ButtonDeconnect>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Header