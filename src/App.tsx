import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";


import { Header } from './components/Header/header';
import { Blocks } from "./pages/blocks/Blocks";
import { TXPool } from "./pages/txpool/TXPool";
import { Search } from "./pages/search/Search";
import { WXcash } from "./pages/wxcash/WXcash";
import { Funds } from "./pages/funds/Funds";
import { Stats } from "./pages/stats/Stats";
import { NotFound } from "./pages/notFound/NotFound";
import { Navbar } from "./components/navbar/Navbar";


export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Blocks />} />
        <Route path='/txpool' element={<TXPool />} />
        <Route path='/search' element={<Search />} />
        <Route path='/wxcash' element={<WXcash />} />
        <Route path='/funds' element={<Funds />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);