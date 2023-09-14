import styled from 'styled-components';
import {Link} from 'react-router-dom';
import NavButton from './NavButton'
import { device } from '../MediaQuery';

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

    @media screen and (max-width: 747px) and (orientation: portrait){
        font-size: 55%;
      };
      @media screen and (max-width: 730px) and (orientation: portrait){
        font-size: 60%;
      };
      @media screen and (max-width: 714px) and (orientation: portrait){
        font-size: 62%;
      };
      @media screen and (max-width: 697px) and (orientation: portrait){
        font-size: 66%;
      };
      @media screen and (max-width: 635px) and (orientation: portrait){
        font-size: 70%;
      };
      @media screen and (max-width: 573px) and (orientation: portrait){
        font-size: 74%;
      };
      @media screen and (max-width: 457px) and (orientation: portrait){
        font-size: 78%;
      };
    @media ${device.mobileL}{
        font-size: 70%;  
      };
      @media screen and (max-width: 412px){
        font-size: 80%;
      };
      @media ${device.mobileM}{
        font-size: 85%; 
      }


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
