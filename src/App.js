import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Routing from './Components/Routing';
import Footer from './Components/Footer';
import { ChakraProvider } from "@chakra-ui/react";
import CuisinesType from './Components/CuisinesType';

function App() {
  return (
    <>
    <ChakraProvider>
    <BrowserRouter >
    <Nav/>
    
    <Routing/>
    <Footer/>
    </BrowserRouter>
    </ChakraProvider>
    </>
  );
}

export default App;
