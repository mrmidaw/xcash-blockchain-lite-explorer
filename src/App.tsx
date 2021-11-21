import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Header } from "./components/Header/header";
import { CirculationBox } from './components/CirculationBox/CirculationBox';
import { Search } from "./components/Search/Search";
import { LastBlockList } from './components/LastBlockList/LastBlockList';
import { BlocksList } from "./components/BlocksList/BlocksList";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />

    <CirculationBox />

    <Search />

    <LastBlockList />

    <BlocksList/>



  </ChakraProvider>
)
