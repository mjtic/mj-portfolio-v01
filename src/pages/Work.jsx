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
    margin-top: 16.5rem;
    
    @media screen and (max-width: 1136px){
        display:flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
        margin: 0 auto;
    };




`
//GridLeft - Img
const StyledGridLeft = styled.img`
background-repeat: no-repeat;
background-size:cover;
height: 55%;
width: 40%;
border-radius: 0  3rem 3rem 0;
filter: blur(.135rem);
background-position: center;
@media screen and (max-width:2100px){
    height: 50%;
    width: 40%;
};
@media screen and (max-width:1800px){
    height: 45%;
    width: 40%;
};
@media screen and (max-width:1600px){
    height: 43%;
    width: 40%;
};
@media screen and (max-width: 1279px){
    width: 37%;
    height: 40%;
};
@media screen and (max-width: 1211px){
    width: 35%;
    height: 40%;
};
@media screen and (max-width: 1136px){
    width: 70%;
    height: 60%;
};
@media screen and (max-width: 1130px){
    width: 68%;
    height: 60%;
}
@media ${device.laptop}{
    width: 70%;
    height: 40%;
};
@media${device.tabletL}{
    height: 40%;
    width: 65%;
};
@media${device.tabletM}{
    height: 40%;
    width: 65%;
};
@media${device.tabletS}{
    height: 40%;
    width: 60%;
};
@media screen and (max-width:665px){
    height: 40%;
    width: 55%;
};
@media screen and (max-width:580px){
    height: 40%;
    width: 50%;
};
@media screen and (max-width:520px){
    height: 40%;
    width: 45%;
};
@media screen and (max-width:435px){
    height: 40%;
    width: 40%;
}
@media ${device.mobileL}{
    height: 35%;
    width: 55%;
}

@media screen and (max-width: 398px){
    height: 35%;
    width: 50%;
}
`
//GridRight-Project Lists
const StyledGridRight = styled.div`
    width: 49%;
    height: 100%;
    margin-top: 8rem;
    @media screen and (max-width:2462px){
        width: 41%;
        height: 90%;
        align-items: center;
        justify-content: center;
        align-content: center;
    }
    @media screen and (max-width:1708px){
        width: 45%;
        height: 100%;
    }

    @media screen and (max-width:1557px){
        width: 49%;
        height: 100%;
    }
    @media screen and (max-width: 1384px){
        width: 50%;
        height: 100%;
    }
    @media screen and (max-width: 1356px){
        width: 53%;
        height: 100%;
    }
    @media screen and (max-width: 1279px){
        width: 56%;
        height: 100%;
    }
    @media screen and (max-width: 1211px){
        width: 60%;
        height: 100%;
    }
    @media screen and (max-width: 1130px){
        width: 64%;
        height: 100%;
    }
    @media screen and (max-width: 1059px){
        width: 68%;
        height: 100%;
    }
    @media${device.laptop}{
        height: 55%;
        width: 90%;   
    };
    @media ${device.tabletL}{
        width: 90%;
        height: 60%;
    };
    @media screen and (max-width: 863px){
        width: 70%;
        heigth: 60%;
    }
    @media ${device.tabletM}{
        width: 75%;
        height: 60%;
    };
    @media screen and (max-width:520px){
        width: 85%;
        height: 60%;
    };
    @media screen and (max-width:454px){
        width: 90%;
        height: 60%;
    };
    @media ${device.mobileL}{
        width: 60%;
        height: 65%;
    
}



 
`
//Work Page Title
const StyledWorkTitle = styled.h1`
    font-family: 'PT Sans Narrow', sans-serif;
    color: #225062;
    font-size: 6rem;
    line-height: 5rem;
    letter-spacing:1rem;
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
justify-content: space-between;


`
//Work lists - project name
const StyledLi = styled(Link)`
font-family: 'Bodoni Moda', serif;
font-weight: 400;
font-size: 4.6rem;
line-height: 5rem;
letter-spacing: 1rem;
display: inherit;
justify-content: space-between;
flex-wrap: wrap;
text-decoration: none;
color: #1E1824;
    @media ${device.laptop}{
        letter-spacing: 5px;
    };
    @media ${device.tabletL}{
        letter-spacing: 4px;
    };
    @media ${device.tabletM}{
        letter-spacing: 3px;
    };
    @media ${device.mobileL}{
        letter-spacing: 1px;
        
    };


    @media ${device.mobileM}{

        letter-spacing: 1px;
    }
    @media ${device.mobileS}{
 
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
    letter-spacing: 3px;
};
@media ${device.tabletL}{
    letter-spacing: 3px;
};
@media ${device.tabletM}{
    letter-spacing: 3px;
};



@media ${device.mobileL}{

    letter-spacing: 1px;
};
@media ${device.mobileM}{

    letter-spacing: 1px;
};

@media ${device.mobileS}{

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
