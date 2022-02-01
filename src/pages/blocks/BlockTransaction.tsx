import React, { FC } from "react";
import { useColorMode, Box, Grid, GridItem, Text } from "@chakra-ui/react";

export interface IBlockTransaction {
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

export const BlockTransaction: FC<IBlockTransaction> = ({ block }) => {
    const { colorMode } = useColorMode();
    const { block_tx_hashes } = block;


    return (
        <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
            fontSize={['sm', 'xl']} fontWeight='semibold' textAlign='center'>

            <Grid templateColumns='repeat(1, 1fr)' gap={2} p={1}>
                <GridItem colSpan={12} bg='skyblue'>
                    <Text fontSize={['md', '3xl']} color=''>Transaction Hash:</Text>
                    <Text mx={2} textAlign={'center'} color='red.900'>
                        {block_tx_hashes.map((hash: string, i: number) => (
                            <Text>{hash}</Text>
                        ))}
                    </Text>
                </GridItem >
            </Grid>
        </Box >
    );
};