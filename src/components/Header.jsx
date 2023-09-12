import styled from 'styled-components';
import {Link} from 'react-router-dom';
import NavButton from './NavButton'

//Need Nav-Menu, Logo, etc

const StyledHeader = styled.div`  
    
    height: 10vh;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 4rem;
    font-size:6rem;
    position: fixed;
    z-index:999;

`

const Logo = styled(Link)`
    font-family:'Bodoni Moda', serif;
    font-weight: bold;
    color:#1E1824;
    letter-spacing: -0.45rem;
    text-decoration: none;
`


function Header({navMenu,setNavMenu}) {
    return (
     <StyledHeader>
        <Logo to='/'>mj/jeong</Logo>
        <div>
        <NavButton navMenu={navMenu} setNavMenu={setNavMenu}/>

        </div>
     </StyledHeader>
    )
}

export default Header
