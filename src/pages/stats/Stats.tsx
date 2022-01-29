import React, { FC } from 'react';
import { useGetBlockchainDataQuery } from '../../store/blockchainData/blockchainData.api';
import { Error } from '../error/Error';
import { GlobalSpinner } from '../../components/spinner/Spinner';
import { Box, useColorMode, Grid, GridItem, Text } from '@chakra-ui/react';

export const Stats: FC = () => {
    const { colorMode } = useColorMode();
    const { data, error, isLoading, } = useGetBlockchainDataQuery();

    if (isLoading) {
        return <GlobalSpinner />
    }

    if (error) {
        return <Error />
    }

    console.log('data >>>', data);


    return (
        <Box textAlign='center'>
            <Text color='orange.500' fontSize={['xl', '2xl', '3xl', '4xl', '5xl']} fontWeight={600} mb='4'>
                X-CASH Statistics
            </Text>

            <Box>
                <Text color='orange.500' fontSize={['lg', 'xl', '3xl']} fontWeight={600}>
                    X-CASH Supply Statistics
                </Text>
                <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} p={4} mx='auto' maxW='95%' borderRadius="lg" my={4}>

                    <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={4}>

                        <GridItem bg='cadetblue'>
                            <Text color='blue.300'>Maximum Supply</Text>
                            <Text>{data.maximum_supply}</Text>
                        </GridItem>

                        <GridItem bg='blue.500'>
                            <Text color='blue.300'>Generated Supply</Text>
                            <Text>{data.generated_supply}</Text>
                        </GridItem>

                        <GridItem bg='blue.500'>
                            <Text color='blue.300'>Circulating Supply</Text>
                            <Text>{data.circulating_supply}</Text>
                        </GridItem>

                    </Grid>
                </Box>
            </Box>

            <Box>
                <Text color='orange.500' fontSize={['lg', 'xl', '3xl']} fontWeight={600}>
                    X-CASH Data
                </Text>
                <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} p={4} mx='auto' maxW='95%' borderRadius="lg" my={4}>

                    <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={4}>

                        <GridItem bg='cadetblue'>
                            <Text color='blue.300'>Algorithm</Text>
                            <Text>DPoPS</Text>
                        </GridItem>

                        <GridItem bg='blue.500'>
                            <Text color='blue.300'>Block Time</Text>
                            <Text>5 Minutes</Text>
                        </GridItem>

                        <GridItem bg='blue.500'>
                            <Text color='blue.300'>Current Block Reward</Text>
                            <Text>34,664</Text>
                        </GridItem>

                    </Grid>
                </Box>
            </Box>

            <Box>
                <Text color='orange.500' fontSize={['lg', 'xl', '3xl']} fontWeight={600}>
                X-CASH Blockchain Data Statistics
                </Text>
                <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} p={4} mx='auto' maxW='95%' borderRadius="lg" my={4}>

                    <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>

                        <GridItem bg='cadetblue'>
                            <Text color='blue.300'>Blockchain Size</Text>
                            <Text>{data.current_estimated_blockchain_size}</Text>
                        </GridItem>

                        <GridItem bg='cadetblue'>
                            <Text color='blue.300'>Total Transactions</Text>
                            <Text>{data.total_tx}</Text>
                        </GridItem>

                        <GridItem bg='blue.500'>
                            <Text color='blue.300'>Total Private Transactions</Text>
                            <Text>{data.private_tx_count}</Text>
                        </GridItem>

                        <GridItem bg='blue.500'>
                            <Text color='blue.300'>Total Public Transactions</Text>
                            <Text>{data.public_tx_count}</Text>
                        </GridItem>

                    </Grid>
                </Box>
            </Box>
        </Box >
    );
};