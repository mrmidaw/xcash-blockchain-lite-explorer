import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Header } from "./components/header/Header";
import { CirculationBox } from "./components/circulationBox/CirculationBox";


export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <CirculationBox />
      <Routes>

      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
