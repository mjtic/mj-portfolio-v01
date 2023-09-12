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
    width: 80%;
    margin: 0 auto;

`


const StyledIntroHeading = styled.h1`
    color: #225062;
    font-family: 'Bodoni Moda', serif;
    font-size: 3.2rem;
    line-height: 9.4rem;
    letter-spacing: 2.5rem;
    font-weight: 400;
    @media ${device.laptopL} and (orientation:landscape){
        letter-spacing: 17.6px;
    }

    @media ${device.laptop}{
        letter-spacing: 16px;
    }
    @media ${device.tabletL}{
        letter-spacing: 13px;
    }
    @media ${device.tabletM}{
        letter-spacing: 11px;
    }
    
    @media ${device.tabletS}{
        letter-spacing: 6px;
    }



    @media ${device.mobileL}{
        letter-spacing: 4px;
    }
    @media ${device.mobileM}{
        letter-spacing: 3px;
    }

`
const StyledIntroBody = styled.p`
    font-family: 'PT Sans Narrow', sans-serif;
    line-height: 9.4rem;
    font-size: 4.6rem;
    letter-spacing: 2rem;
    margin-bottom: 5rem;

`
const StyledIntroSpan1 = styled.span`
  
    font-family: 'Bodoni Moda', serif;
    font-weight: 600;
    font-style: italic;
    letter-spacing: -0.5rem;
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
    margin-right: 15rem;
    text-decoration: none;
    color: #1E1824;
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
const StyledIntroFooter2 = styled(Link)`
    font-family: 'Bodoni Moda', serif;
    font-size: 3.2rem;
    line-height: 4rem;
    letter-spacing: .5rem;
    display: inline-block;
    text-decoration: none;
    color: #1E1824;
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



//    transform: translateY(-20rem);

function Home() {
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
