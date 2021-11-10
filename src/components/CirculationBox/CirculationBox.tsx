import { Box, Grid, Spinner } from "@chakra-ui/react";

import React, { useState } from "react";

export const CirculationBox = () => {

    const [state, setState] = useState({
        maximum_supply: '',
        generated_supply: '',
        circulating_supply: ''
    });

    const getBlockHeight = async (url: string) => {
        const res = await fetch(url);
        return await res.json();
    }

    getBlockHeight("https://explorer.x-cash.org/getblockchaindata")
        .then((res) => setState(res))
        .catch(error => console.log("Error", error));

    return (

        <Grid templateColumns="repeat(3, 1fr)" gap={6} mt='5'>

            <Box w="100%" h="10" bg="#1189a5" fontSize="24px" fontWeight='semibold' color="gray.900" textAlign='center'>
                {state.maximum_supply ? `Maximum supply: ${state.maximum_supply}` : <Spinner size="sm" color='red' />}
            </Box>

            <Box w="100%" h="10" bg="#1189a5" fontSize="24px" fontWeight='semibold' color="gray.900" textAlign='center'>
                {state.generated_supply ? `Generated supply: ${state.generated_supply}` : <Spinner size="sm" color='red' />}
            </Box>

            <Box w="100%" h="10" bg="#1189a5" fontSize="24px" fontWeight='semibold' color="gray.900" textAlign='center'>
                {state.circulating_supply ? `Circulation supply: ${state.circulating_supply}` : <Spinner size="sm" color='red' />}
            </Box>

        </Grid>

    );
};