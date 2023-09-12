import styled from 'styled-components';
import { useEffect } from 'react';
import {animate,stagger} from 'framer-motion';
import { device } from '../MediaQuery';

const StyledContact = styled.section`
    height: 100%;
    width: 100%;
`
const StyledContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'PT Sans Narrow',sans-serif;
    margin: 0 auto;
    width: 80%;
    line-height: auto;
    margin-top: 18rem;
`
const StyledContactHeading = styled.h1`
    color: #225062;
    font-size: 6rem; 
    position: relative;
    letter-spacing: 1rem;
    margin-top: 10rem; 
    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: .2rem;
        border-radius: .5rem;
        background-color: #225062;
        bottom:0;
        left:0;
    }    
`

const StyledContactMail = styled.p`
    font-size: 5.6rem;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`
const StyledEmailAnchor= styled.a`
    color: #1E1824;
    position: relative;
    text-decoration: none;
    align-self: end;
    @media ${device.mobileL}{
        font-size: 12px;
    };
    @media ${device.mobileM}{
        font-size: 10px;
    };
        @media ${device.mobileS}{
        font-size: 10px;
    };
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        height: .3rem;
        border-radius: .5rem;
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
const StyledContactMedia = styled.p`  
    font-size: 5.6rem;  
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-top: 1rem;
`
const StyledLinkedIn = styled.a`

    color: #1E1824;
    position: relative;
    text-decoration: none;
    margin-right: 1rem;
    @media ${device.mobileL}{
        font-size: 12px;
    };
    @media ${device.mobileM}{
        font-size: 10px;
    };
        @media ${device.mobileS}{
        font-size: 10px;
    };
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
const StyledGitHub = styled.a`
color: #1E1824;
position: relative;    
text-decoration: none;
@media ${device.mobileL}{
    font-size: 12px;
};
@media ${device.mobileM}{
    font-size: 10px;
};
    @media ${device.mobileS}{
    font-size: 10px;
};
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
const StyledMediaAnchorWrapper = styled.div`
    font-size: inherit;
`


function Contact() {
    useEffect(()=>{
        animate(
            '.stagger-contact',
        {y:[-120,-20],opacity:[0,1]},
        {delay:stagger(0.3), duration:0.2}
    );
},[])
    return (
        <StyledContact>
            <StyledContactWrapper>
                
                <StyledContactHeading className='stagger-contact'>CONTACT</StyledContactHeading>
                   
                   
                    <StyledContactMail className='stagger-contact'> MAIL <StyledEmailAnchor href='mailto:myeonghun.jeong88@gmail.com'>&#8599; hello@itsmj.jeong</StyledEmailAnchor></StyledContactMail>
            

                <StyledContactMedia className='stagger-contact'>SOCIAL MEDIAS 
                   <StyledMediaAnchorWrapper> 
                    <StyledLinkedIn className='stagger-contact' href='https://www.linkedin.com/in/myeonghun-jeong-7b9193b4/'>&#8599; linkedin</StyledLinkedIn> 
                    <StyledGitHub className='stagger-contact' href='https://github.com/mjtic'>&#8599; github</StyledGitHub>
                   </StyledMediaAnchorWrapper>
                </StyledContactMedia>
            </StyledContactWrapper>
        </StyledContact>
    )
}

export default Contact
