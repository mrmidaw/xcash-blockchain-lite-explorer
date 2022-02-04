import React, { FC, useState, useEffect } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Error } from "../error/Error";
import { GlobalSpinner } from '../../components/spinner/Spinner';


interface ITxPool {
    transaction_hash: string;
    transaction_tx_fees: string;
    transaction_tx_size: string;
    transaction_tx_privacy_settings: string;
}

export const TXPool: FC = () => {
    // Framer Motion
    const MotionBox = motion(Box)
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const [txPool, setTxPool] = useState([]);
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
            let response = await fetch('https://explorer.getxcash.org/gettransactionpooldata', requestOptions);
            let result = await response.json();
            const dataObj: {} = Object.values(result);

            const transaction_hash: string[] = dataObj['0'].split("|");
            const transaction_tx_fees: string[] = dataObj['3'].split("|");
            const transaction_tx_size: string[] = dataObj['4'].split("|");
            const transaction_tx_privacy_settings: string[] = dataObj['6'].split("|");


            const totalTxPoolArray: ITxPool[] = [];
            for (let count = 0; count < transaction_hash.length; count++) {
                totalTxPoolArray[count] = {
                    "transaction_hash": transaction_hash[count],
                    "transaction_tx_fees": transaction_tx_fees[count],
                    "transaction_tx_size": parseFloat(transaction_tx_size[count]).toFixed(2),
                    "transaction_tx_privacy_settings": transaction_tx_privacy_settings[count],
                };
            };

            setTxPool(totalTxPoolArray);
            setIsLoading(false);

        } catch (error) {
            return <Error />
        }
    };

    if (isLoading) {
        return <GlobalSpinner />
    }

    // to display correct transaction fee
    const decimalAmount = (num) => {
        return num / 1000000;
    }

    console.log('txpool >>>', txPool);

    return (
        (txPool.map((pool, index) => (
            <MotionBox
                initial="hidden" animate="visible" variants={variants}
                transition={{ duration: 0.8, times: [0, 0.5, 1] }}
                key={index} bg='gray.500' p={2} my={6} mx='auto' maxW='96%' borderRadius="lg" color='orange.400' fontSize={['sm', 'lg', '2xl']} textAlign='center' fontWeight='bold'
            >
                <Grid
                    templateRows={'repeat(2, 1fr)'}
                    templateColumns={'repeat(12, 1fr)'}
                    p={1} gap={2} textAlign='center'
                >
                    <GridItem colStart={1} colEnd={5} bg='gray.700' >
                        <Text color='blue.300' mx={2} >Transaction Fee:</Text>
                        <Text mx={2} >{decimalAmount(pool.transaction_tx_fees)} XCASH</Text>
                    </GridItem>

                    <GridItem colStart={5} colEnd={9} bg='gray.600'>
                        <Text color='blue.300' >Transaction Size:</Text>
                        <Text mx={2} >{pool.transaction_tx_size} KB</Text>
                    </GridItem>

                    <GridItem colStart={9} colEnd={13} bg='gray.700'>
                        <Text color='blue.300' >Privacy Settings:</Text>
                        <Text mx={2} >{pool.transaction_tx_privacy_settings}</Text>
                    </GridItem>

                    <GridItem colStart={1} colEnd={13} bg='gray.600'>
                        <Text color='blue.300' >Transaction Hash:</Text>
                        <Text mx={2}>{pool.transaction_hash}</Text>
                    </GridItem>

                </Grid>
            </MotionBox >
        )))
    )
};