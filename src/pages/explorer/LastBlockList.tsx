import React, { FC, useState } from "react";
import { Box, useColorMode, GridItem, SimpleGrid } from "@chakra-ui/react";
import { convertSeconds } from "../../components/helpers";


export const LastBlockList:FC = () => {
    const { colorMode } = useColorMode();
    const [blockState, setBlockState] = useState({
        block_height: '',
        block_hash: '',
        block_tx_amount: '',
        block_reward: '',
        block_timestamp: convertSeconds(''),
        block_size: ''
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
            <SimpleGrid                
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
                textAlign='center'
                fontSize='2xl'
                color="gray.900"
                fontWeight='semibold'
            >
                <GridItem rowSpan={2} colSpan={1} bg="gray.500">
                    {`Block Height: ${blockState.block_height} Block Size: ${blockState.block_size} KB`}
                </GridItem>

                <GridItem colSpan={2} bg="gray.400">
                    {`Block Time: ${blockState.block_timestamp}`}
                </GridItem >

                <GridItem colSpan={2} bg="gray.400">
                    {`Block Reward: ${blockState.block_reward}`}
                </GridItem >

                <GridItem colSpan={4} bg="gray.400">
                    {`Block Hash: ${blockState.block_hash}`}

                </GridItem>

                <GridItem colSpan={5} bg="gray.400">
                    {blockState.block_tx_amount ? `Block Transaction Amount: ${blockState.block_tx_amount}` : `Block Transaction Amount: 0`}
                </GridItem>


            </SimpleGrid>

        </Box>
    );
};