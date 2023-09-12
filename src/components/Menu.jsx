import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../MediaQuery';

const StyledMenu = styled.section`
    width: 100%;
    height: 100%;
    margin-top: 25rem;
    
    @media ${device.laptopL}{
        margin-top: 180px;
       }
    @media ${device.laptop}{
        margin-top: 130px;
       }

    @media ${device.tabletL}{
        margin-top: 250px;
    }
    @media ${device.tabletM}{
        margin-top: 220px;
    }
    @media ${device.tabletS}{
        margin-top: 220px;
    }
    @media ${device.mobileL}{
        margin-top: 250px;
    }
    @media ${device.mobileM}{
        margin-top: 160px;
    }
    @media ${device.mobileS}{
        margin-top: 140px;
    }
`

const StyledMenuWrapper = styled.div`
    width: 100%;
    height: 100%;
    font-family: 'PT Sans Narrow',sans-serif;
   
    display: flex;
    flex-direction: column;
    align-items: center;
    &:visited{
      color: #225062;
    }
`

const StyledMenuHome = styled(Link)`
    font-size: 7.2rem;
    text-decoration: none;
    margin-bottom: 4rem;
    color: #225062;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: .3rem;
        background-radius: .5rem;
        background-color: #225062;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }&:hover::before{
        transform-origin: left;
        transform: scaleX(1);
    }
`
const StyledMenuWork = styled(Link)`
    font-size: 7.2rem;
    text-decoration: none;
    margin-bottom: 4rem;
    color: #225062;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: .3rem;
        background-radius: .5rem;
        background-color: #225062;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }&:hover::before{
        transform-origin: left;
        transform: scaleX(1);
    }
    `

const StyledMenuAbout = styled(Link)`
    font-size: 7.2rem;
    text-decoration: none;
    margin-bottom: 4rem;
    color: #225062;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: .3rem;
        background-radius: .5rem;
        background-color: #225062;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }&:hover::before{
        transform-origin: left;
        transform: scaleX(1);
    }
`
const StyledMenuContact = styled(Link)`
    font-size: 7.2rem;
    text-decoration: none;
    color: #225062;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: .3rem;
        background-radius: .5rem;
        background-color: #225062;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }&:hover::before{
        transform-origin: left;
        transform: scaleX(1);
    }
`

function Menu({navMenu,setNavMenu}) {
    return (
        <StyledMenu>
            <StyledMenuWrapper>
                <StyledMenuHome to={'/'} onClick={()=>setNavMenu(!navMenu)}>HOME</StyledMenuHome>
                <StyledMenuWork to={'/work'} onClick={()=>setNavMenu(!navMenu)}>WORK</StyledMenuWork>
                <StyledMenuAbout to={'/about'} onClick={()=>setNavMenu(!navMenu)}>ABOUT</StyledMenuAbout>
                <StyledMenuContact to={'/contact'} onClick={()=>setNavMenu(!navMenu)}>CONTACT</StyledMenuContact>
            </StyledMenuWrapper>
        </StyledMenu>
    )
}


export default Menu
