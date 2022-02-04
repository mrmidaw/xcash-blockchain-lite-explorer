import React, { FC } from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

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
    block_tx_sizes?: number[];
    block_tx_paymentid_settings?: string[];
    block_tx_privacy_settings?: string[];
}

export const BlockTransaction: FC<IBlock> = ({ block }) => {
    const { block_tx_hashes } = block;


    return (
        <Box bg='cyan.800' fontSize={['sm', 'xl']} fontWeight='bold' textAlign='center'>

            <Grid templateColumns='repeat(1, 1fr)' gap={2}>
                <GridItem colSpan={12}>
                    <Text fontSize={['md', '3xl']} color='orange.400'>
                        Transaction Hash:
                    </Text>
                    <Text mx={2} textAlign={'center'} color='blue.300'>
                        {block_tx_hashes.map((hash: string, i: number) => (
                            <Text key={i}>{hash}</Text>
                        ))}
                    </Text>
                </GridItem >
            </Grid>

        </Box >
    );
};