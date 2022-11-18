import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'

const ButtonDeconnect = styled.button`
color: var(--primaire)
`
const LogoDiv = styled.div`
width: 100%;
height: 220px;
left: 0px;
top: 0px;

`
const HeaderDiv = styled.div`
box-sizing: border-box;

width: 100%;
height: 363px;

background: #404040;
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 2px;
`

const NavBar = styled.nav`
position: absolute;
width: 100%;
height: 41px;
left: 0px;
top: 220px;

background: #404040;
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const UlHeader = styled.ul`
/* ul */
/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 50px;
gap: 100px;
list-style-type: none;

position: absolute;
width: 100%;
height: 30px;
left: 129px;

`
const NavigateLi = styled.li`
width: 69px;
height: 30px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;

color: #FD2D01;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`
// 

const Header = () => {
    // const { toggleLogged, logged } = useContext(LoggedContext)
    const handleLogOut = () => {
        localStorage.clear()
    }

    return (
        <HeaderDiv>
            <LogoDiv>
                <Link to='/home'>
                    <img id='logo' src={Logo} alt='logo'></img>
                </Link>
            </LogoDiv>

            <NavBar>
                <UlHeader className='item'>
                    <NavigateLi className=''>
                        <Link to='/home'>Home</Link>
                    </NavigateLi>
                    <NavigateLi className='item'>
                        <Link to='/home/new_post'>New post</Link>
                    </NavigateLi>
                    <NavigateLi className='item'>
                        <Link to='/'>
                            <ButtonDeconnect onClick={handleLogOut} >Deconnect</ButtonDeconnect>
                        </Link>
                    </NavigateLi>
                </UlHeader>
            </NavBar>
        </HeaderDiv >
    )
}

export default Header