import React, { FC } from 'react';
import { useGetLastBlocksQuery } from '../../store/lastblocks/lastBlocks.api';
import Moment from 'react-moment';

import { Box, useColorMode, Grid, GridItem, Text, Center } from '@chakra-ui/react';


export const Explorer: FC = () => {
    const { data, isLoading, error } = useGetLastBlocksQuery();
    const { colorMode } = useColorMode();

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>Something going wrong...</h2>
    }

    // From Api comes global Object. This function return array from object to render in the component
    const modifyFetchLastBlocks = () => {
        const totalBlocksArray = [];

        const dataObj: {} = Object.values(data);

        const block_height: number[] = dataObj['0'].split("||");
        const block_hash: string[] = dataObj['1'].split("||");
        const block_size: number[] = dataObj['2'].split('||');
        const block_tx_amount: number[] = dataObj['3'].split('||');
        const block_reward: number[] = dataObj['4'].split('||');
        const block_timestamp: number[] = dataObj['5'].split("||");
        const block_mining_reward_transaction_hash: string[] = dataObj['7'].split("||");


        for (let count = 0; count < block_height.length; count++) {
            totalBlocksArray[count] = {
                "block_height": block_height[count],
                "block_hash": block_hash[count],
                "block_size": parseFloat(block_size[count]).toFixed(2) + " KB",
                "block_tx_amount": block_tx_amount[count],
                "block_reward": block_reward[count],
                "block_timestamp": block_timestamp[count],
                "block_mining_reward_transaction_hash": block_mining_reward_transaction_hash[count]
            }
        };
        return totalBlocksArray;
    };


    const totalBlocksArray = modifyFetchLastBlocks();


    return (
        <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} p={4} mx='auto' maxW='94%' color="black" borderRadius="lg" >

            {totalBlocksArray.map((block) => (
                <Box bg='blue.400'>
                    <Grid
                        h='300px'
                        templateRows='repeat(3, 1fr)'
                        templateColumns='repeat(6, 1fr)'
                        gap={2}
                        key={block.block_height}
                    >
                        <GridItem rowSpan={1} colSpan={2} bg='tomato'>
                            <Center>
                                <Text>
                                    Block Height {block.block_height}
                                </Text>
                            </Center>
                        </GridItem>

                        <GridItem rowSpan={1} colSpan={1} bg='tomato'>
                            <Center>
                                <Text>
                                    Block Time
                                    <Moment unix>
                                        {block.block_timestamp}
                                    </Moment>
                                </Text>
                            </Center>
                        </GridItem>

                        <GridItem colSpan={2} bg='papayawhip'>

                        </GridItem>

                        <GridItem colSpan={2} bg='papayawhip'>

                        </GridItem>

                        <GridItem colSpan={4} bg='tomato' >

                        </GridItem>



                        <GridItem colSpan={4} bg='tomato' >

                        </GridItem>

                    </Grid>
                </Box>
            ))}
        </Box>
    );
};