import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";


import { Header } from './components/Header/header';
import { Navbar } from "./components/navbar/Navbar";
import { Blocks } from "./pages/blocks/Blocks";
import { TXPool } from "./pages/txpool/TXPool";
import { Search } from "./pages/search/Search";
import { WXcash } from "./pages/wxcash/WXcash";
import { Funds } from "./pages/funds/Funds";
import { Stats } from "./pages/stats/Stats";
import { NotFound } from "./pages/notFound/NotFound";
import { TransactionDetail } from './pages/transaction/TransactionDetail';
import { BlockMiningReward } from './pages/blockReward/BlockMiningReward';


export const App: FC = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Blocks />} />
        <Route path='/TXPool' element={<TXPool />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/WXcash' element={<WXcash />} />
        <Route path='/Funds' element={<Funds />} />
        <Route path='/Stats' element={<Stats />} />
        <Route path="Transaction=:id" element={<TransactionDetail />} />
        <Route path="BlockRewardTransaction=:id" element={<BlockMiningReward />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);