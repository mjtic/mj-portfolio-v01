import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { device } from "./MediaQuery";
import { projectLists } from "./components/ProjectLists";

import Overlay from "./components/Overlay";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

//reset only
//16px*62.5% = 1rem;
const GlobalStyle = createGlobalStyle`
  *{
  box-sizing : border-box;
  padding : 0;
  margin : 0;
  font-size: 62.5%; 


  @media ${device.laptopL}{
    font-size: 60.5%;
  };
  @media${device.laptop}{
    font-size: 56%;
  }
  @media ${device.tabletL}{
    font-size: 56%;  
  };
  @media ${device.tabletM}{
    font-size: 55%;  
  };
  @media ${device.tabletS}{
    font-size: 54%;  
  };
  @media ${device.mobileL}{
    font-size: 32%;  
  };
  @media ${device.mobileM}{
    font-size: 27%;
  };
  @media ${device.mobileS}{
    font-size: 24%;
  };

  &::-webkit-scrollbar{
    width:0;
    height:0;
  }

`;

function App() {
  const [currentProject, setCurrentProject] = useState(1);
  const [navMenu, setNavMenu] = useState(false);
  return (
    <BrowserRouter basename="/mj-portfolio-v01">
      <GlobalStyle />
        <Overlay />
          <Routes>
           <Route element={<Layout navMenu={navMenu} setNavMenu={setNavMenu}/>}> 
            <Route element={<Home  setNavMenu={setNavMenu}/>} path="/"  />
            <Route element={<About  setNavMenu={setNavMenu}/>} path="/about" />
            <Route
            element={
              <Work
                projectLists={projectLists}
                currentProject={currentProject}
                setCurrentProject={setCurrentProject}
                navMenu={navMenu}
                setNavMenu={setNavMenu}
              />
            }
            path="/work"
            />
            <Route
            element={
              <Project
                projectLists={projectLists}
                currentProject={currentProject}
                setNavMenu={setNavMenu}
              />
            }
            path="/project"
          />
          <Route element={<Contact  setNavMenu={setNavMenu} />} path="/contact" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
