import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

import { motion } from 'framer-motion';
import Moment from 'react-moment';

import { Error } from '../error/Error';
import { GlobalSpinner } from '../../components/spinner/Spinner';

import { useGetBlockHashDataByIdQuery } from '../../store/blockHashData/blockHashData.api';

export interface IBlockHashData {
    block_height: number;
    block_hash: string;
    block_size: number;
    block_tx_amount: number;
    block_reward: number;
    block_timestamp: number;
    block_difficulty: number;
}

export const BlockHashData: FC = () => {
    const { id } = useParams();

    // get hash data from rtk quey
    const { data, error, isLoading } = useGetBlockHashDataByIdQuery(id);

    // Framer Motion
    const MotionBox = motion(Box);
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const decimalAmount = (num: number) => {
        return (num / 1).toFixed(2);
    };

    if (error) {
        return <Error />;
    }

    if (isLoading) {
        return <GlobalSpinner />;
    }

    return (
        <MotionBox
            initial="hidden" animate="visible" variants={variants} transition={{ duration: 0.8, times: [0, 0.5, 1] }}
            bg='gray.500' p={2} my={6} mx='auto' maxW={['95%', '80%',]} borderRadius="lg" color='orange.400' fontSize={['sm', 'lg', 'xl']} textAlign='center' fontWeight='bold'
        >
            <Text color='blue.300' fontSize={['lg', 'xl', '3xl']}>
                Block Hash Data
            </Text>

            <Grid
                templateRows={'repeat(1, 1fr)'} templateColumns={'repeat(12, 1fr)'}
                p={1} gap={2} textAlign='center'
            >
                <GridItem colStart={1} colEnd={7} bg='gray.700'>
                    <Text mx={2} color='blue.300'>Block Height:</Text>
                    <Text fontSize={['lg', 'xl', '3xl']}>{data.block_height}</Text>
                </GridItem >

                <GridItem colStart={7} colEnd={13} bg='gray.700'>
                    <Text color='blue.300'>Block TX Amount:</Text>
                    <Text fontSize={['lg', 'xl', '3xl']}>{data.block_tx_amount}</Text>
                </GridItem >

                <GridItem colStart={1} colEnd={13} bg='gray.600'>
                    <Text color='blue.300'>Block Hash:</Text>
                    <Text mx={2}>{data.block_hash}</Text>
                </GridItem >

                <GridItem colStart={1} colEnd={7} bg='gray.700'>
                    <Text mx={2} color='blue.300'>Block Size:</Text>
                    <Text>{decimalAmount(data.block_size)} KB</Text>
                </GridItem >

                <GridItem colStart={7} colEnd={13} bg='gray.700'>
                    <Text color='blue.300'>Block Reward:</Text>
                    <Text>{decimalAmount(data.block_reward)} XCASH</Text>
                </GridItem >

                <GridItem colStart={1} colEnd={7} bg='gray.600'>
                    <Text mx={2} color='blue.300'>Block Time:</Text>
                    <Text>
                        <Moment unix format="DD/MM/YY - hh:mm:ss">
                            {data.block_timestamp}
                        </Moment>
                    </Text>
                </GridItem >

                <GridItem colStart={7} colEnd={13} bg='gray.600'>
                    <Text color='blue.300'>Block Difficulty:</Text>
                    <Text>{data.block_difficulty}</Text>
                </GridItem >

            </Grid>
        </MotionBox>
    );
};