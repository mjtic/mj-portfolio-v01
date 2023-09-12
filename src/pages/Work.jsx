import styled from 'styled-components';
import {stagger, animate} from 'framer-motion';
import { useEffect, useState } from 'react';
import{Link} from 'react-router-dom';
import {device} from '../MediaQuery';


const StyledWork = styled.section`
    height:100%;
    width: 100%;
    display:flex;  
`
const StyledWorkGridWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-top: 22rem;
    @media ${device.laptop}{
        display:flex;
        flex-direction: column;
        justify-content: center;
        height: auto;
        margin: 0 auto;
        
    }


`
//GridLeft - Img
const StyledGridLeft = styled.img`
background-repeat: no-repeat;
background-size:cover;
height: 50%;
width: 50%;
border-radius: 0  3rem 3rem 0;
filter: blur(.135rem);
background-position: center;

`
//GridRight-Project Lists
const StyledGridRight = styled.div`
    width: 46.5%;
    height: 100%;
    margin-top: 8rem;
    @media${device.laptop}{
        height: 55%;        
    }

`
//Work Page Title
const StyledWorkTitle = styled.h1`
    font-family: 'PT Sans Narrow', sans-serif;
    color: #225062;
    font-size: 6rem;
    line-height: 5rem;
    letter-spacing:1rem;
    margin-bottom: 6rem;
`
//Work unorder list
const StyledUl = styled.ul`
color: #1E1824;
list-style-type: none;
text-align: left;
display: flex;
flex-direction: column;
width: 90%;
overflow-y: auto;
height: 90%;
scroll-behavior: smooth;
`
//Work lists - project name
const StyledLi = styled(Link)`
font-family: 'Bodoni Moda', serif;
font-weight: 400;
font-size: 4.6rem;
line-height: 9rem;
letter-spacing: 2rem;
margin-bottom: 2rem;
display: inherit;
justify-content: space-between;
flex-wrap: wrap;
text-decoration: none;
color: #1E1824;
    @media ${device.laptop}{
        font-size: 40px;
        letter-spacing: 10px;
    };
    @media ${device.tabletL}{
        font-size: 38px;
        letter-spacing: 8px;
    };
    @media ${device.tabletM}{
        font-size: 38px;
        letter-spacing: 5px;
    };
    @media ${device.tabletS}{
        font-size: 37px;
        letter-spacing: 4px;
    };
    @media ${device.mobileL}{
        font-size: 22px;
        letter-spacing: 1px;
    };
    @media ${device.mobileM}{
        font-size: 20px;
        letter-spacing: 1px;
    }
    @media ${device.mobileS}{
        font-size: 16px;
        letter-spacing: 1px;
    }

`
//Work list span - skills used for project
const StyledLiSpan = styled.span`
font-family: 'PT Sans Narrow', sans-serif;
text-decoration: none;
letter-spacing:1rem;
font-size: 2rem;
border-bottom: .3rem #225062 solid;
@media ${device.laptop}{
    font-size: 14px;
    letter-spacing: 5px;
};
@media ${device.tabletL}{
    font-size: 13px;
    letter-spacing: 4px;
};
@media ${device.tabletM}{
    font-size: 12px;
    letter-spacing: 3px;
}

@media ${device.mobileL}{
    font-size: 8px;
    letter-spacing: 1px;
};
@media ${device.mobileM}{
    font-size: 7px;
    letter-spacing: 1px;
}
@media ${device.mobileS}{
    font-size: 5px;
    letter-spacing: 1px;
}
`
//used useEffect to operate animate,stagger from 'framer-motion'
function Work({currentProject, projectLists, setCurrentProject, navMenu}) {

    const [isHovered, setIsHovered] = useState('');
    console.log(isHovered);
    useEffect(()=>{
        animate('.work-stagger',
        {y:[-1000,0],opacity:[0,1]},
        {delay:stagger(0.25)}
        )
    },[navMenu]);

    return (
        <StyledWork>
            <StyledWorkGridWrapper>
              <StyledGridLeft className='work-stagger' style={ isHovered===''? {backgroundImage:'url(testwork1.jpg)'}:{backgroundImage: `url(${isHovered})`}}/>
             
              <StyledGridRight>
              <StyledUl >
                
                <StyledWorkTitle className='work-stagger'>WORK</StyledWorkTitle>
                    {projectLists.map(element=>
                        <StyledLi key={element.Id} to='/project' className='work-stagger' onClick={()=>setCurrentProject(element.Id)} onMouseOver={()=>setIsHovered(element.Pictures[0].pictureURL)} onMouseOut={()=>setIsHovered('')}>{element.Project}
                        <StyledLiSpan className='work-stagger'>{element.Technology}</StyledLiSpan>
                        </StyledLi>
                        
                        )}
                </StyledUl>
              </StyledGridRight>
            </StyledWorkGridWrapper>
        </StyledWork>
    )
}

export default Work
