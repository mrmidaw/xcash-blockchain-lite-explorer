import React, { FC } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export interface IBlock {
    block_height: number;
    block_hash: string;
    block_size: string;
    block_tx_amount: number;
    block_reward: string;
    block_timestamp: number;
    block_mining_reward_transaction_hash: string;
    block_tx_hashes?: string[];
    block_tx_ringsizes?: number[];
    block_tx_fees?: number[];
    block_tx_sizes?: string[];
    block_tx_paymentid_settings?: string[];
    block_tx_privacy_settings?: string[];
}

interface IProps {
    block: IBlock
}

export const BlockTransaction: FC<IProps> = ({ block }) => {

    const { block_tx_hashes, block_tx_fees, block_tx_privacy_settings, block_tx_sizes } = block;

    const decimalAmount = (num: number) => {
        return (num / 1000000).toFixed(3);
    };

    const totalTransactionsArray = [];
    for (let count = 0; count < block_tx_hashes.length; count++) {
        totalTransactionsArray[count] = {
            'block_tx_hashes': block_tx_hashes[count],
            'block_tx_fees': decimalAmount(block_tx_fees[count]),
            'block_tx_privacy_settings': block_tx_privacy_settings[count],
            'block_tx_sizes': block_tx_sizes[count]
        };
    }


    return (
        <Box>
            <Text color='blue.300'>Block Transactions</Text>
            {totalTransactionsArray.map((transaction, index) => (
                <Box key={index} fontSize={['xs', 'md']} fontWeight='bold' textAlign='center' 
                bgGradient='linear(to-r, teal.300, gray.400, teal.300)'
                    my={3} mx='auto' borderRadius="base">

                    <Grid
                        templateRows={'repeat(1, 1fr)'} templateColumns={'repeat(12, 1fr)'}
                        p={1} gap={1}
                    >
                        <GridItem colStart={1} colEnd={13} bg='gray.600'>
                            <Text color='blue.300' >Transaction Hash:</Text>
                            <Link to={`Transaction=${transaction.block_tx_hashes}`}>
                                <Text mx={2} color='orange.300'>{transaction.block_tx_hashes}</Text>
                            </Link>
                        </GridItem>

                        <GridItem colStart={1} colEnd={5} bg='gray.700'>
                            <Text color='blue.300' mx={2} >Transaction Fee:</Text>
                            <Text mx={2}>{transaction.block_tx_fees} XCASH</Text>
                        </GridItem>

                        <GridItem colStart={5} colEnd={9} bg='gray.600'>
                            <Text color='blue.300' mx={2} >Transaction Size:</Text>
                            <Text mx={2}>{parseFloat(transaction.block_tx_sizes).toFixed(2)} KB</Text>
                        </GridItem>

                        <GridItem colStart={9} colEnd={13} bg='gray.700'>
                            <Text color='blue.300' mx={2} >Privacy Settings:</Text>
                            <Text mx={2}>{transaction.block_tx_privacy_settings}</Text>
                        </GridItem>
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};