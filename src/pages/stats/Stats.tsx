import React, { FC } from 'react';
import { useGetBlockchainDataQuery } from '../../store/blockchainData/blockchainData.api';
import { Error } from '../error/Error';
import { GlobalSpinner } from '../../components/spinner/Spinner';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const Stats: FC = () => {
    const { data, error, isLoading, } = useGetBlockchainDataQuery();

    // Framer Motion
    const MotionBox = motion(Box)
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    if (isLoading) {
        return <GlobalSpinner />
    }

    if (error) {
        return <Error />
    }

    // Function for placing commas in numbers
    const putCommas = (num: number) => {
        return num.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    };


    return (
        <MotionBox
            initial="hidden" animate="visible" variants={variants}
            transition={{ duration: 0.8, times: [0, 0.5, 1] }} textAlign='center'
        >
            <Text color='orange.500' fontSize={['lg', 'xl', '3xl']} fontWeight={600}>
                X-CASH Data
            </Text>

            <Box
                bg='gray.600' maxW='96%' mb={4} p={4} mx='auto'
                borderRadius="lg" fontSize={['md', '2xl']} fontWeight='500'
            >
                <Grid templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>
                    <GridItem bg='cadetblue'>
                        <Text color='blue.300'>Algorithm</Text>
                        <Text>DPoPS</Text>
                    </GridItem>

                    <GridItem bg='blue.500'>
                        <Text color='blue.300'>Block Time</Text>
                        <Text>5 Minutes</Text>
                    </GridItem>

                    <GridItem bg='cadetblue'>
                        <Text color='blue.300'>Block Height</Text>
                        <Text>{putCommas(data.block_height)}</Text>
                    </GridItem>

                    <GridItem bg='blue.500'>
                        <Text color='blue.300'>Block Reward</Text>
                        <Text>34,634</Text>
                    </GridItem>
                </Grid>
            </Box>

            <Text color='orange.500' fontSize={['lg', 'xl', '3xl']} fontWeight={600}>
                X-CASH Supply Statistics
            </Text>

            < Box
                bg='gray.600' maxW='96%' mb={4} p={4} mx='auto'
                borderRadius="lg" fontSize={['md', '2xl']} fontWeight='500'
            >
                <Grid
                    templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']} gap={4}
                >
                    <GridItem bg='cadetblue'>
                        <Text color='blue.300'>Maximum Supply</Text>
                        <Text>{putCommas(data.maximum_supply)}</Text>
                    </GridItem>

                    <GridItem bg='blue.500'>
                        <Text color='blue.300'>Generated Supply</Text>
                        <Text>{putCommas(data.generated_supply)}</Text>
                    </GridItem>

                    <GridItem bg='cadetblue'>
                        <Text color='blue.300'>Circulating Supply</Text>
                        <Text>{putCommas(data.circulating_supply)}</Text>
                    </GridItem>
                </Grid>
            </Box>

            <Text color='orange.500' fontSize={['lg', 'xl', '3xl']} fontWeight={600}>
                X-CASH Blockchain Data Statistics
            </Text>

            < Box
                bg='gray.600' maxW='96%' mb={4} p={4} mx='auto'
                borderRadius="lg" fontSize={['md', '2xl']} fontWeight='500'
            >
                <Grid templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={4}>

                    <GridItem bg='cadetblue'>
                        <Text color='blue.300'>Blockchain Size</Text>
                        <Text>{putCommas(data.current_estimated_blockchain_size)}</Text>
                    </GridItem>

                    <GridItem bg='blue.500'>
                        <Text color='blue.300'>Total Transactions</Text>
                        <Text>{putCommas(data.total_tx)}</Text>
                    </GridItem>

                    <GridItem bg='cadetblue'>
                        <Text color='blue.300'>Private Transactions</Text>
                        <Text>{putCommas(data.private_tx_count)}</Text>
                    </GridItem>

                    <GridItem bg='blue.500'>
                        <Text color='blue.300'>Public Transactions</Text>
                        <Text>{putCommas(data.public_tx_count)}</Text>
                    </GridItem>
                </Grid>
            </Box>
        </MotionBox >
    );
};