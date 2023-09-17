import styled from 'styled-components';
import {device} from '../MediaQuery';

//wrappers
const StyledProject = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
`
const StyledProjectWrapper = styled.div`
    width: 90%;
    height: 100%;
    top: 0;
    margin: 0 auto;
    position:fixed;

`;

const StyledDiv = styled.div`
width: 100%;
height: 100%;
overflow-y: auto;
scroll-behavior: smooth;
margin: 0 auto;

`


//project-title-image
const StyledTitlePage = styled.div`
    background-size: cover;
    border-radius: 0 0 6rem 6rem;
    background-repeat: no-repeat;
    width:100%;
    height: 50%;
    background-position: center;
    margin: 0 auto;
    @media ${device.laptop}{
        width: 900px;
        height: 500px;
    };
    @media ${device.tabletL}{
        width: 700px;
        height: 400px;
    };
    
    @media ${device.mobileL}{
        width: 300px;
        height: 200px;
    }
`
const StyledProjectHeading = styled.h1`
font-size: 7rem;
font-family: 'Bodoni Moda', serif;
letter-spacing: 1rem;
height: 100%;
width: 100%;
position: relative;
display: flex;
justify-content: space-between;
@media ${device.laptop}{
    font-size: 54px;
}
@media ${device.tabletL}{
    font-size: 45px;
};

@media ${device.tabletM}{
    font-size: 41px;
};
@media ${device.tabletS}{
    font-size: 38px;
};
@media ${device.mobileL}{
    font-size: 17px;
    letter-spacing: 5px;
}
&::before{
    content: '';
    position: absolute;
    width: 100%;
    height: .3rem;
    background-radius: .5rem;
    background-color: #225062;
    bottom: 0;
    left: 0;
}

`

// Span wrapper contains Deployed site and Code
const StyledProjectSpanWrapper = styled.div`
    font-size: 5.6rem;  
    margin-top: 1rem;
    font-family: 'PT Sans Narrow', sans-serif;
    margin: 0 auto;
`
const AnchorWrapper = styled.div`    
    font-size: inherit;

`

const StyledDemo = styled.a`
    text-decoration: none;
    color: inherit;
    position: relative;
    display: inline-block;
    @media${device.mobileL}{
        font-size: 10px;
        letter-spacing: 3px;
    };
    &:hover{
       transform: translateY(-1rem);
       transition: transform 0.5s ease-out;
    }
`
const StyledCode = styled.a`
    text-decoration: none;
    color: inherit;
    position: relative;
    display: inline-block;
    @media${device.mobileL}{
        font-size: 10px;
        letter-spacing: 3px;
    };
    &:hover{
        transform: translateY(-1rem);
        transition: transform 0.5s ease-out;
    }
`

//project information wrapper
const StyledProjectInfo = styled.div`
    
    color: #225062;
    display: flex; 
    flex-wrap: wrap;
    width: 100%;
    height: 50%;
    overflow-y: auto;
    scroll-behavior: smooth;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    font-family: 'PT Sans Narrow', sans-serif;
`



const StyledProjectSummary1 = styled.div`
    width: 50%;
    height: 50%;
    flex-wrap: wrap;
`


const StyledProjectCatergory = styled.p`
font-size: 3rem;
letter-spacing: 0.5rem;
display: flex;
flex-wrap: wrap;
@media ${device.laptop}{
    font-size: 20px;
};
@media ${device.tabletL}{
    font-size: 17px;
};
@media ${device.tabletM}{
    font-size: 16px;
};
@media ${device.mobileL}{
    font-size: 12px;
};
`
const StyledProjectYear = styled.p`
font-size: 3rem;
letter-spacing: 0.5rem;

@media ${device.laptop}{
    font-size: 20px;
};
@media ${device.tabletL}{
    font-size: 17px;

};
@media ${device.tabletM}{
    font-size: 16px;
};

@media ${device.mobileL}{
    font-size: 12px;
}
`
const StyledProjectSummary2 = styled.div`
    width: 50%;
    height: 50%;
    overflow-y: auto;
    scroll-behavior: smooth;
    display: flex;
    flex-wrap: wrap;
`
const ProjectSummary = styled.div`
font-size: 3rem;
font-family: 'PT Sans Narrow', sans-serif;
letter-spacing: 0.8rem;
word-spacing: 0.1rem;
@media ${device.laptop}{
    font-size: 20px;
    hypen: auto;
};
@media ${device.tabletL}{
    font-size: 17px;
};
@media ${device.tabletM}{
    font-size: 16px;
};
@media ${device.mobileL}{
    font-size: 13px;
    letter-spacing: 2px;
}   
`
//Below are pictures
const PictureDiv = styled.div`
width: 120rem;
height: 100rem;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto 5rem auto;
gap: 5rem;


@media ${device.laptop}{
    width: 100%;
    height: auto;
    margin: 0 auto;
};
@media ${device.mobileL}{
    width: 100%;
    height: auto;
    margin: 0 auto;
}

`
const StyledPictureHeading = styled.h1`
font-size: 4.2rem;
font-family: 'PT Sans Narrow', sans-serif;

`

const StyledProjectPicture = styled.img`
width: 100rem;
height: auto;
max-width: 120rem;
max-hegiht: 100rem;
min-width: 100rem;
border-radius: 2rem;
@media ${device.laptop}{
    width: 500px;
    height: auto;
    max-width: 600px;
    max-height: 500px;
    min-width: 500px;
    
};
@media ${device.mobileL}{
    width: 280px;
    height: auto;
    max-width: 400px;
    max-height: 280px;
    min-width: 280px;
}   

`





function Project({projectLists, currentProject, setNavMenu}) {
    setNavMenu(false);
    const project = projectLists.filter(project=>project.Id === currentProject)[0]
    console.log(project);
  
    return (
        <StyledProject>
            <StyledProjectWrapper>
                
              <StyledDiv>
                <StyledTitlePage style={{backgroundImage:`url(${project.Pictures[0].pictureURL})`}}/>

                    <StyledProjectSpanWrapper>             
                        <StyledProjectHeading>{project.ProjectSummary.Title}<AnchorWrapper><StyledDemo href={project.ProjectURL.Demo} >&#8599;DEMO</StyledDemo><StyledCode href={project.ProjectURL.Code}>&#8599;CODE</StyledCode></AnchorWrapper>
                        </StyledProjectHeading>
                    </StyledProjectSpanWrapper>
                       
                <StyledProjectInfo>
                    <StyledProjectSummary1>
                        <StyledProjectCatergory>Category:{project.ProjectSummary.Category}</StyledProjectCatergory>
                        <StyledProjectYear>Year:{project.ProjectSummary.Year}</StyledProjectYear>
                    </StyledProjectSummary1>

                    <StyledProjectSummary2>    
                        <ProjectSummary>{project.ProjectSummary.Summary} </ProjectSummary>
                    </StyledProjectSummary2>
                </StyledProjectInfo>



                     
                     <PictureDiv>
                        
                            {project.Pictures.slice(1).map(picture=>
                                <div key={Math.random()}>
                                <StyledPictureHeading >{picture.Title}</StyledPictureHeading> 
                                <StyledProjectPicture src={picture.pictureURL}/>
                                </div>
                                )}
                     </PictureDiv>
                
                        
                     </StyledDiv>  
               
            </StyledProjectWrapper>            
        </StyledProject>
    )
}

export default Project
