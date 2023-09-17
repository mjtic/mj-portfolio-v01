import styled from 'styled-components';
import {animate, stagger} from 'framer-motion';
import { useEffect } from 'react';
import resume from '../mj-resume.pdf'
import { device } from '../MediaQuery';

const StyledAbout = styled.section`
    height:100%;
    width: 100%;
    overflow: hidden;
    display: flex;
`
const StyledAboutGridWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    position: relative;
    @media ${device.laptopL}{
        display:flex;
        flex-direction: column-reverse;
        justify-content: center;
        height: auto;
        margin: 0 auto;
    };
    @media ${device.mobileL}{
        position: relative;
    }
`
const StyledAboutGridLeft = styled.div`
    width: 50%;
    height: 100%;
    margin-top: 7rem;
    margin-left: 4rem;
    @media ${device.laptopL}{
        margin-top: 0;
        height: 50%;
        width: 80%;
        justify-content: center;
        align-items: center;
        margin-left: 0;
    };
    @media screen and (max-width: 1366px){
        width: 80%;
        height:75%;
    }
    @media screen and (max-width: 1280px){
        height: 65%;
        width: 80%;
    };
    @media screen and (max-width: 1280px) and (max-height:800px){
        height: 45%;
        width: 80%;
    };
    @media screen and (max-width: 1112px){
        height: 70%;
        width: 80%;   
    };
    @media ${device.laptop}{
        height: 40%;
        width: 80%;
    };
    @mdeia ${device.tabletS}{
        height: 50%;
        width: 60%;
    };
    @media ${device.mobileL}{
        height: 80%;
        width: 75%;
        position: absolute;
    };
    @media${device.mobileM}{
       width: 80%;
        height: 90%;
    };
`

const StyledAboutGridRight = styled.img`
    height: 85%;
    width: 25%;
    background-image: linear-gradient(
        45deg, rgba(250,250,0,0.4),rgba(0,0,250,0.4)),url('portfolio-mj2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5rem 0 0 5rem;
    z-index: -1;
    position: fixed;
    right: 0;
    top:-9rem;
    filter:blur(.15rem);
    display: flex;
    @media screen and (max-width: 2000px){
        height: 90%;
        width: 25%;
    };
    @media screen and (max-width: 1700px){
        height: 95%;
        width: 25%;
    };
    @media${device.laptopL}{
        position: relative;
        border-radius: 0 0 25px 25px;
        filter: blur(.135rem);
        width: 60%;
        height: 50%;
    };
    @media screen and (max-width: 1366px){
        width: 30%;
        height: 30%;
    };
    @media screen and (max-width: 1280px){
        height: 45%;
        width: 55%;
    };
    @media screen and (max-width: 1112px){
        height: 35%;
        width: 45%;
    };
    @media ${device.laptop}{
        height: 35%;
        width: 45%;
        top: -260px;
    }
    @media${device.tabletL} {
    };
    @media${device.tabletM}{
    };
    @media${device.tabletS}{
        top: 0;
        border-radius: 15px 15px 15px 15px;
    };
    @media ${device.mobileL}{
        top: -1000px;
    };
    `

const StyledAboutTextContainer = styled.div`
    font-family: 'PT Sans Narrow', sans-serif;
    height: 80%;

`
const StyledAboutHeading = styled.h1`
    font-size: 4.8rem;
    letter-spacing: 1rem;
    font-weight: 400;
    line-height: 4.8rem;
    color: #225062;
    border-bottom: 0.2rem solid #1E1824;
    display:flex;
    justify-content: space-between;
    padding-bottom: 2rem;
   
`
const StyledAboutHeadingSpan1 = styled.span`
    font-size: 3.2rem;
    letter-spacing: 0.2rem;
    color: #225062;
`
const StyledAboutHeadingSpan2 = styled.span`
    font-size: 2.2rem;
    letter-spacing:0.2rem;
&.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 700,
  'GRAD' 0,
  'opsz' 24
}
`
const StyledAboutStory = styled.p`
 font-size:3.2rem;
 padding: 4rem;
 overflow-y: auto;
 height: 80%;
 text-align: justify;
 text-justify: inter-word;

`
function About({setNavMenu}) {
    setNavMenu(false);
    useEffect(()=>{
        animate('.about-stagger',
        {y:[-1000,90],opacity:[0,1]},
        {delay:stagger(0.3), duration:0.1 }
        )
    },[])
    return (
        <StyledAbout>
         <StyledAboutGridWrapper className='about-stagger'>
            <StyledAboutGridLeft>
                
              <StyledAboutTextContainer className='about-stagger'>
                <StyledAboutHeading >ABOUT
                    <a href={resume} target='_blank'rel="noreferrer" style={{textDecoration:'none'}}><StyledAboutHeadingSpan1>resume<StyledAboutHeadingSpan2 className='material-symbols-outlined'>download</StyledAboutHeadingSpan2></StyledAboutHeadingSpan1></a>
                </StyledAboutHeading>
                <StyledAboutStory >
                Greetings, I'm Myeong Jeong, but you can call me MJ Jeong.
                 In March 2023, I proudly graduated from the Full-Stack Flex Coding Bootcamp
                  at the University of Texas at Austin. My journey, however, began earlier 
                  with a Bachelor of Arts in Organization Leadership from the University of Purdue,
                 where I graduated in 2019. My professional path has always been inspired by those remarkable individuals
                 who excel as subject matter experts, effortlessly solving complex problems 
                 within their teams. 
                 <br/>This admiration ignited a transformation within me, 
                 leading me to pursue a career where I could harness the power of expertise 
                 and problem-solving. That's when I made the decision to merge these 
                 principles with the world of coding.
                 <br/>In my quest to become a professional in this field, 
                 I've committed myself to incorporating these thought processes into every 
                 line of code I write. This journey has been a remarkable one, and I'm excited 
                 to continue evolving and making a meaningful impact in the ever-evolving world
                of technology.
                </StyledAboutStory>   
              </StyledAboutTextContainer>  
            </StyledAboutGridLeft>


            <StyledAboutGridRight/>

         </StyledAboutGridWrapper> 
        </StyledAbout>
    )
}

export default About
