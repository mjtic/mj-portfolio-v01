import styled from 'styled-components';
import { stagger, animate } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { device } from '../MediaQuery';

const StyledHome = styled.section`
    width: 100%;
    height: 100%;
`
const StyledIntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 75%;
    width: 95%;
    margin: 0 auto;
    @media ${device.laptopL}{
        height: 85%;
    }
`


const StyledIntroHeading = styled.h1`
    color: #225062;
    font-family: 'Bodoni Moda', serif;
    font-size: 3.2rem;
    line-height: 9.4rem;
    letter-spacing: 0.8rem;
    font-weight: 400;
    @media ${device.laptop}{
        letter-spacing: 8px;
    };
    @media${device.mobileL}{
        letter-spacing: 3px;
        line-height: 45px;
    };
    @media${device.mobileS}{
        letter-spacing: 1px;
    }
    



`
const StyledIntroBody = styled.p`
    font-family: 'PT Sans Narrow', sans-serif;
    line-height: 9.4rem;
    font-size: 4.6rem;
    letter-spacing: 1rem;
    margin-bottom: 5rem;
    @media ${device.mobileL}{
        letter-spacing: 4px;
        line-height: 45px;
        margin-bottom: 15px;
    };
    @media ${device.mobileM}{
        letter-spacing: 3px;
    };
    @media${device.mobileS}{
        letter-spacing: 1px;
    };


`
const StyledIntroSpan1 = styled.span`
  
    font-family: 'Bodoni Moda', serif;
    font-weight: 600;
    font-style: italic;
    letter-spacing: -0.15rem;
    font-size: 4.6rem;

`
const StyledIntroSpan2 = styled.span`

    font-family: 'Bodoni Moda', serif;
    font-weight: 600;
    font-style: italic;
    letter-spacing: -0.15rem;
    font-size: 4.6rem;


`
const StyledIntroSpan3 = styled.span`
    display:block;
    font-family: 'Bodoni Moda', serif;
    font-weight: 600;
    font-style: italic;
    letter-spacing: -0.3rem;
    font-size: 4.6rem;

`

const StyledIntroFooter1 = styled(Link)`
    font-family: 'Bodoni Moda', serif;
    font-size: 3.2rem;
    line-height: 4rem;
    letter-spacing: .5rem;
    display: inline-block;
    margin-right: 5rem;
    text-decoration: none;
    color: #1E1824;
    position: relative;
    @media ${device.mobileL}{
        margin-right: 5px;
        letter-spacing: 1px;
    };
    @media${device.mobileS}{
        letter-spacing: 0px;
        margin-right: 1px;
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
const StyledIntroFooter2 = styled(Link)`
    font-family: 'Bodoni Moda', serif;
    font-size: 3.2rem;
    line-height: 4rem;
    letter-spacing: .5rem;
    display: inline-block;
    text-decoration: none;
    color: #1E1824;
    position: relative;
    @media ${device.mobileL}{
        letter-spacing: 1px;
    };
    @media${device.mobileS}{
        letter-spacing: 0px;
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



//    transform: translateY(-20rem);

function Home({setNavMenu}) {
    setNavMenu(false);
    useEffect(() => {
        animate(
          '.stagger-motion',
          { y: [-1000, -20], opacity: [0, 1] },
          { delay: stagger(0.3), duration:0.35 }
        );
      }, []);
    return (
        <StyledHome>
            <StyledIntroWrapper>
            
            <StyledIntroHeading className='stagger-motion'>I’M A FULL-STACK DEVELOPER</StyledIntroHeading>
              <StyledIntroBody className='stagger-motion'>
                Hi, I’m <StyledIntroSpan1 className='stagger-motion'>MYEONG JEONG,</StyledIntroSpan1>
                <StyledIntroSpan3/>
                but you can call me <StyledIntroSpan2 className='stagger-motion'>MJ</StyledIntroSpan2>
              </StyledIntroBody>
              <div className='stagger-motion'>
              <StyledIntroFooter1 to='/work'>&rarr; see my work</StyledIntroFooter1>
              <StyledIntroFooter2 to='/about'>&rarr; more about me</StyledIntroFooter2>
              </div>
              </StyledIntroWrapper>
         </StyledHome>      
    )
}

export default Home
