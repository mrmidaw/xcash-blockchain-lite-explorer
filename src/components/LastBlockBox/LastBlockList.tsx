import React, { useState } from "react";
import { Box, useColorMode, Spinner, Grid, GridItem } from "@chakra-ui/react";


export const LastBlockList = () => {
    const { colorMode } = useColorMode();
    const [blockState, setBlockState] = useState({
        block_height: "",
        block_hash: "",
        block_tx_amount: "",
        block_reward: '',
        block_timestamp: ""
    });

    const getBlockHeight = async (url: string) => {
        const res = await fetch(url);
        return await res.json();
    }

    getBlockHeight("https://explorer.getxcash.org/getlastblockdata")
        .then((res) => setBlockState(res))
        .catch(error => console.log("Error", error));



    return (
        <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
            w="100%" p={5} mt={5} borderRadius="lg"
        >
            <Grid
                h="250px"
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
                textAlign='center'
                fontSize='3xl'
                color="gray.900"
                fontWeight='semibold'
            >
                <GridItem rowSpan={2} colSpan={1} bg="gray.500">
                    {blockState.block_height ? `Block Height: ${blockState.block_height}` : <Spinner size="sm" color='red' />}
                </GridItem>

                <GridItem colSpan={2} bg="gray.400">
                    {blockState.block_timestamp ? `Block Time: ${blockState.block_timestamp}` : <Spinner size="sm" color='red' />}
                </GridItem >

                <GridItem colSpan={2} bg="gray.400">
                    {blockState.block_reward ? `Block Reward: ${blockState.block_reward} xcash` : <Spinner size="sm" color='red' />}
                </GridItem >

                <GridItem colSpan={4} bg="gray.400">
                    {blockState.block_hash ? `Block Hash: ${blockState.block_hash}` : <Spinner size="sm" color='red' />}

                </GridItem>

                <GridItem colSpan={5} bg="gray.400">
                    {blockState.block_tx_amount ? `Block Transaction Amount: ${blockState.block_tx_amount}` : `Block Transaction Amount: 0`}
                </GridItem>


            </Grid>

        </Box>
    );
};