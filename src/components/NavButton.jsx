import styled from 'styled-components';
import { useState } from 'react';


const StyleNav = styled.div`
    position: relative;
    
`
//transparent overlay to handle events
const Overlay = styled.div`
    position: absolute;
    width: 5rem;
    height: 5rem;
    top:0;
    right: 4rem;
    background-color: transparent;
    cursor: pointer 
`
const StyledNavButton = styled.div`
    width: 5rem;
    height: 5rem;
    margin-right: 4rem;
    position: relative;
    z-index: -1;
    overflow:hidden;

`



const Circle = styled.div`
    border: .125rem solid #1E1824;
    border-radius: 50%;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    transition: all 0.25s ease-in-out;

    
`

function NavButton({navMenu,setNavMenu}) {
    const [isHovered, setIsHovered] = useState(false);

    function handleClick(){
        setNavMenu(!navMenu);
    }

//overlay to change setIsHover() to true when hovered
    return (
        <StyleNav>
            
        <Overlay onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} onClick={handleClick}></Overlay>

        <StyledNavButton >
            <Circle id='1' style={navMenu ? {transform:'translate(-100%,-100%)', left: '0'} : {left:'0'}}> </Circle>
            <Circle id='2' style={navMenu? {transform:'translate(-50%, -100%)',left:'50%'}:isHovered ? {transform:'translate(-50%, -100%)',left:'50%'} : {transform:'translateX(-50%)',left:'50%'}}></Circle>
            <Circle id='3' style={navMenu ? {transform:'translate(100%,-100%)',right:'0'} :{right:'0'}}></Circle>
            <Circle id='4' style={navMenu? {top:'50%',transform:'translate(-100%, -50%)'} :isHovered ? {top:'50%',transform:'translate(-100%, -50%)'} :{top:'50%',transform:'translateY(-50%)'}}></Circle>
            <Circle id='5-1' style={navMenu?{left:'50%', transform:'translate(-50%, -50%) rotate(135deg)',top:'50%', width:'100%', borderRadius:'1rem'} :isHovered ? {left:'50%', transform:'translate(-50%, -50%)',top:'50%', width:'100%', borderRadius:'1rem'} :{left:'50%', transform:'translate(-50%, -50%)',top:'50%', opacity:'0'} }></Circle>
            <Circle id='5-2' style={navMenu?{left:'50%', transform:'translate(-50%, -50%) rotate(135deg)',top:'50%', height:'100%', borderRadius:'1rem'} :isHovered ? {left:'50%', transform:'translate(-50%, -50%)',top:'50%', height:'100%', borderRadius:'1rem'}:{left:'50%', transform:'translate(-50%, -50%)',top:'50%'}}></Circle>
            <Circle id='6' style={navMenu?{right:'0', top:'50%', transform:'translate(100%,-50%)'} : isHovered ? {right:'0', top:'50%', transform:'translate(100%,-50%)'} : {right:'0', top:'50%', transform:'translateY(-50%)'}}></Circle>
            <Circle id='7' style={navMenu ? {transform:'translate(-100%,100%)', bottom:'0'}:{bottom:'0'}}></Circle>
            <Circle id='8' style={navMenu ? {bottom:'0', left:'50%', transform:'translate(-50%, 100%)'} :isHovered ? {bottom:'0', left:'50%', transform:'translate(-50%, 100%)'} : {bottom:'0', left:'50%', transform:'translateX(-50%)'}}></Circle>
            <Circle id='9' style={navMenu ? {transform:'translate(100%,100%)', bottom:'0', right:'0'}:{bottom:'0', right:'0'}}></Circle>
        </StyledNavButton>
     
        </StyleNav>
    )
}


export default NavButton
