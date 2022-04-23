import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { motion } from 'framer-motion';
import Moment from 'react-moment';

import { Error } from '../error/Error';
import { GlobalSpinner } from '../../components/spinner/Spinner';

import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

import { useGetTransactionDetailByIdQuery } from '../../store/transactionDetail/transactionDetail.api';


export const TransactionDetail: FC = () => {
    const { id } = useParams();

    // get transaction data from rtk query
    const { isLoading, data, error } = useGetTransactionDetailByIdQuery(id);

    // Framer Motion
    const MotionBox = motion(Box);
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const decimalAmount = (num: number) => {
        return num / 1000000;
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
            bg='gray.500' p={2} my={6} mx='auto' maxW={['95%', '80%',]} borderRadius="lg" color='orange.400'
            fontSize={['sm', 'lg', 'xl']} textAlign='center' fontWeight='bold'
        >
            <Text color='blue.300' fontSize={['lg', 'xl', '3xl']}>Transaction Detail</Text>

            <Grid
                templateRows={'repeat(1, 1fr)'} templateColumns={'repeat(12, 1fr)'}
                p={1} gap={2} textAlign='center'
            >
                <GridItem colStart={1} colEnd={7} bg='gray.700'>
                    <Text mx={2} color='blue.300'>Block Height:</Text>
                    <Text fontSize={['lg', 'xl', '3xl']}>{data.tx_block_height}</Text>
                </GridItem >

                <GridItem colStart={7} colEnd={13} bg='gray.700'>
                    <Text color='blue.300'>Block Unlock Height:</Text>
                    <Text fontSize={['lg', 'xl', '3xl']}>{data.tx_unlock_block}</Text>
                </GridItem >

                <GridItem colStart={1} colEnd={13} bg='gray.600'>
                    <Text color='blue.300'>Transaction Hash:</Text>
                    <Text mx={2}>{id}</Text>
                </GridItem >

                <GridItem colStart={1} colEnd={13} bg='gray.700'>
                    <Text color='blue.300'>Extra:</Text>
                    <Text mx={2}>{data.tx_extra}</Text>
                </GridItem >

                <GridItem colStart={1} colEnd={5} bg='gray.700'>
                    <Text color='blue.300'> Transaction Time:</Text>
                    <Text><Moment unix format="DD/MM/YY - hh:mm:ss">{data.tx_block_timestamp}</Moment></Text>
                </GridItem >

                <GridItem colStart={5} colEnd={9} bg='gray.600'>
                    <Text color='blue.300' mx={2}>Transaction Fee:</Text>
                    <Text>{decimalAmount(data.tx_fee).toFixed(2)} XCASH</Text>
                </GridItem >

                <GridItem colStart={9} colEnd={13} bg='gray.700'>
                    <Text color='blue.300' mx={2}>Transaction Size:</Text>
                    <Text mx={2}>{data.tx_size} KB</Text>
                </GridItem >
            </Grid>
        </MotionBox>
    );
};