import * as React from "react";
import {
  Box, Divider,
  ChakraProvider, Container, theme
} from "@chakra-ui/react";


import { Header } from "./components/Header/header";
import { CirculationBox } from './components/CirculationBox/CirculationBox';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />

    <Divider />

    <CirculationBox />

    <Container maxW="container.lg">
      <Box>

      </Box>
    </Container>
  </ChakraProvider>
)
