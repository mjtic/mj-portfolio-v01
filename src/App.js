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
  @media screen and ${device.laptop}{
    font-size: 56%;
  };
  @media ${device.tabletL} and (orientation: portrait){
    font-size: 56%;  
  };
  @media ${device.tabletL} and (orientation: landscape){
    font-size: 56%;  
  };
  @media ${device.tabletM} and (orientation: portrait){
    font-size: 55%;  
  };
  @media ${device.tabletM} and (orientation: landscape){
    font-size: 55%;  
  };
  @media ${device.tabletS} and (orientation: portrait){
    font-size: 54%;  
  };
  @media ${device.tabletS} and (orientation: landscape){
    font-size: 70%;  
  };

  @media screen and (max-width: 747px){
    font-size: 52%;
  };

  @media screen and (max-width: 730px) {
    font-size: 50%;
  };
  @media screen and (max-width: 714px){
    font-size: 48%;
  };
  @media screen and (max-width: 697px) {
    font-size: 44%;
  };
  @media screen and (max-width: 635px){
    font-size: 40%;
  };
  @media screen and (max-width: 573px) {
    font-size: 37%;
  };
  @media screen and (max-width: 519px) {
    font-size: 33%;
  };
  @media screen and (max-width: 457px) {
    font-size: 29%;
  };
  @media ${device.mobileL} and (orientation: portrait){
    font-size: 30%;  
  };
  @media ${device.mobileL} and (orientation: landscape){
    font-size: 25%%;  
  };
  @media screen and (max-width: 412px){
    font-size: 29%;
  };
  @media screen and (max-width: 398px){
    font-size: 28%;
  };
  @media screen and (max-width: 387px){
    font-size: 27%;
  };
  @media screen and (max-width: 378px){
    font-size: 26%;
  };
  @media ${device.mobileM}{
    font-size: 25%;
  };
  @media screen and (max-width: 362px){
    font-size: 24%;
  };
  @media screen and (max-width: 330px){
    font-size: 22%;
  };
  @media ${device.mobileS}{
    font-size: 21%;
  };
  @media screen and (max-width: 289px){
    font-size: 20%;
  };
  @media screen and (max-width: 277px){
    font-size: 19%;
  }


  }&::-webkit-scrollbar{
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
