import * as React from "react";
import {
  Box,
  ChakraProvider, Container, theme
} from "@chakra-ui/react";


import { Header } from "./components/Header/header";
import { CirculationBox } from './components/CirculationBox/CirculationBox';
import { Search } from "./components/Search/Search";
import {ModalWarning} from './components/ModalWarning/ModalWarning';
import { LastBlockList } from "./components/LastBlockBox/LastBlockList";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />

    <CirculationBox />

    <Search />

    <LastBlockList/>

    
    
  </ChakraProvider>
)
