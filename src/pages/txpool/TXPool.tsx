import React, { FC, useState, useEffect } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Error } from "../error/Error";
import { GlobalSpinner } from '../../components/spinner/Spinner';

import { GoCalendar } from 'react-icons/go';
import { RiCurrencyLine } from 'react-icons/ri';
import { MdPhotoSizeSelectLarge } from 'react-icons/md';
import { RiGitRepositoryPrivateLine } from 'react-icons/ri';
import { RiFileTransferLine } from 'react-icons/ri';


interface ITxPool {
    transaction_hash: string;
    transaction_tx_fees: number;
    transaction_tx_size: string;
    transaction_tx_privacy_settings: string;
}

export const TXPool: FC = () => {
    // Framer Motion
    const MotionBox = motion(Box);
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const [txPool, setTxPool] = useState<ITxPool[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAndTransformTxPoolData();
    }, []);

    // From fetch comes global object. This function fetch global object and return array as json
    const getAndTransformTxPoolData = async () => {
        setIsLoading(true);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'tx_pool_settings=0',
        };

        try {
            const response = await fetch('https://explorer.getxcash.org/gettransactionpooldata', requestOptions);
            const result = await response.json();
            const dataObj = Object.values(result);

            const transaction_hash: string[] = dataObj['0'].split("|");
            const transaction_tx_fees: number[] = dataObj['3'].split("|");
            const transaction_tx_size: string[] = dataObj['4'].split("|");
            const transaction_tx_privacy_settings: string[] = dataObj['6'].split("|");

            const decimalAmount = (num: number) => {
                return num / 1000000;
            };

            const totalTxPoolArray: ITxPool[] = [];
            for (let count = 0; count < transaction_hash.length; count++) {
                totalTxPoolArray[count] = {
                    "transaction_hash": transaction_hash[count],
                    "transaction_tx_fees": decimalAmount(transaction_tx_fees[count]),
                    "transaction_tx_size": transaction_tx_size[count],
                    "transaction_tx_privacy_settings": transaction_tx_privacy_settings[count],
                };
            }

            setTxPool(totalTxPoolArray);
            setIsLoading(false);

        } catch (error) {
            return <Error />;
        }
    };

    if (isLoading) {
        return <GlobalSpinner />;
    }


    return (
        <Box>
            {txPool.map((pool, index) => (
                <MotionBox
                    initial="hidden" animate="visible" variants={variants}
                    transition={{ duration: 0.8, times: [0, 0.5, 1] }}
                    key={index} bg='gray.500' p={2} my={4} mx='auto' maxW='96%' borderRadius="lg" color='orange.400' fontSize={['sm', 'lg', '2xl']} textAlign='center' fontWeight='bold'
                >
                    <Grid
                        templateRows={'repeat(3, 1fr)'} templateColumns={'repeat(12, 1fr)'}
                        p={1} gap={2} textAlign='center'
                    >
                        <GridItem colStart={1} colEnd={7} bg='gray.700'>
                            <Grid templateColumns={'repeat(6, 1fr)'}>
                                <GridItem colStart={1} colEnd={2} m='auto' color='blue.300' >
                                    <RiCurrencyLine />
                                </GridItem>

                                <GridItem colStart={2} colEnd={7} bg='gray.600'>

                                    <Text color='blue.300' mx={2} >Transaction Fee:</Text>
                                    <Text mx={2}>
                                        {pool.transaction_tx_fees === 0 ?
                                            '' : `${parseFloat(pool.transaction_tx_fees).toFixed(2)} XCASH`
                                        }
                                    </Text>

                                </GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem colStart={7} colEnd={13} bg='gray.600'>
                            <Grid templateColumns={'repeat(6, 1fr)'}>
                                <GridItem colStart={1} colEnd={2} m='auto' color='blue.300' >
                                    <MdPhotoSizeSelectLarge />
                                </GridItem>

                                <GridItem colStart={2} colEnd={7} bg='gray.700'>
                                    <Text color='blue.300' mx={2} >Transaction Size:</Text>
                                    <Text mx={2}>
                                        {!pool.transaction_tx_size ?
                                            '' : `${parseFloat(pool.transaction_tx_size).toFixed(2)} KB`}
                                    </Text>
                                </GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem colStart={1} colEnd={7} bg='gray.600'>
                            <Grid templateColumns={'repeat(6, 1fr)'}>
                                <GridItem colStart={1} colEnd={2} m='auto' color='blue.300' >
                                    <RiGitRepositoryPrivateLine />
                                </GridItem>

                                <GridItem colStart={2} colEnd={7} bg='gray.700'>
                                    <Text color='blue.300' mx={2} >Privacy Settings:</Text>
                                    <Text mx={2} >{pool.transaction_tx_privacy_settings}</Text>
                                </GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem colStart={7} colEnd={13} bg='gray.700'>
                            <Grid templateColumns={'repeat(6, 1fr)'}>
                                <GridItem colStart={1} colEnd={2} m='auto' color='blue.300' >
                                    <GoCalendar />
                                </GridItem>

                                <GridItem colStart={2} colEnd={7} bg='gray.600'>
                                    <Text mx={2} color='blue.300' >Date and Time:</Text>
                                    <Text mx={2}> {!pool.transaction_tx_size ? '' : '01/01/1970 - 3:00:00'}</Text>
                                </GridItem>
                            </Grid>
                        </GridItem>

                        <GridItem colStart={1} colEnd={13} bg='gray.600'>
                            <Grid templateColumns={'repeat(12, 1fr)'}>
                                <GridItem colStart={1} colEnd={2} m='auto' color='blue.300' >
                                    <RiFileTransferLine />
                                </GridItem>

                                <GridItem colStart={2} colEnd={13} bg='gray.700'>
                                    <Text color='blue.300'>Transaction Hash:</Text>
                                    <Text mx={2}>{pool.transaction_hash}</Text>
                                </GridItem>
                            </Grid>
                        </GridItem>
                    </Grid>
                </MotionBox >
            ))}
        </Box>
    );
};