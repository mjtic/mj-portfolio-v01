import styled from 'styled-components'; 
import Header from './Header';
import {Outlet} from 'react-router-dom';
import Menu from './Menu';
// header 
// content

const StyledLayout = styled.div`
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow:hidden;
`
const StyledMain = styled.div`
    width: 100%;
    height: 100%;
`

function Layout({navMenu,setNavMenu}) {
    return (

            <StyledLayout>  
            <Header navMenu={navMenu} setNavMenu={setNavMenu}/>
             <StyledMain>
              {navMenu?<Menu/>:<Outlet />}
             </StyledMain>
            
            
             </StyledLayout>
    )
}

export default Layout

