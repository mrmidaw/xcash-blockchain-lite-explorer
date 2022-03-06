import React, { FC } from "react";
import { useGetLastBlocksQuery } from '../../store/lastblocks/lastBlocks.api';
import { BlockTransaction } from './BlockTransaction';
import Moment from 'react-moment';
import { GlobalSpinner } from '../../components/spinner/Spinner';
import { Error } from '../error/Error';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';


export const Blocks: FC = () => {
    const { data, isLoading, error } = useGetLastBlocksQuery();

    // Framer Motion
    const MotionBox = motion(Box);
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    // Function for placing commas in numbers
    const putCommas = (num: number) => {
        return num.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    if (isLoading) {
        return <GlobalSpinner />;
    }

    if (error) {
        return <Error />;
    }

    // From Api come global Object. This function return array from object to render in the component
    const modifyFetchLastBlocks = () => {

        const dataObj = Object.values(data);

        const block_height: number[] = dataObj['0'].split("||");
        const block_hash: string[] = dataObj['1'].split("||");
        const block_size: string[] = dataObj['2'].split('||');
        const block_tx_amount: number[] = dataObj['3'].split('||');
        const block_reward: string[] = dataObj['4'].split('||');
        const block_timestamp: number[] = dataObj['5'].split("||");
        const block_mining_reward_transaction_hash: string[] = dataObj['7'].split("||");
        const block_tx_hashes: string[] = dataObj['8'].split("||");
        const block_tx_ringsizes: string[] = dataObj['9'].split("||");
        const block_tx_fees: string[] = dataObj['10'].split("||");
        const block_tx_sizes: string[] = dataObj['11'].split("||");
        const block_tx_paymentid_settings: string[] = dataObj['12'].split("||");
        const block_tx_privacy_settings: string[] = dataObj['13'].split("||");


        const totalBlocksArray = [];
        for (let count = 0; count < block_height.length; count++) {
            totalBlocksArray[count] = {
                "block_height": block_height[count],
                "block_hash": block_hash[count],
                "block_size": parseFloat(block_size[count]).toFixed(2) + " KB",
                "block_tx_amount": block_tx_amount[count],
                "block_reward": parseFloat(block_reward[count]).toFixed(2) + " XCASH",
                "block_timestamp": block_timestamp[count],
                "block_mining_reward_transaction_hash": block_mining_reward_transaction_hash[count],
                'block_tx_hashes': block_tx_hashes[count].split('|'),
                'block_tx_ringsizes': block_tx_ringsizes[count].split('|'),
                'block_tx_fees': block_tx_fees[count].split('|'),
                'block_tx_sizes': block_tx_sizes[count].split('|'),
                'block_tx_paymentid_settings': block_tx_paymentid_settings[count].split('|'),
                'block_tx_privacy_settings': block_tx_privacy_settings[count].split('|')
            };
        }
        return totalBlocksArray;
    };

    const totalBlocksArray = modifyFetchLastBlocks();


    return (
        (totalBlocksArray.map((block) => (
            <MotionBox
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.8, times: [0, 0.5, 1] }}
                key={block.block_height}
                bg='gray.500'
                p={2} my={6} mx='auto' maxW='96%' borderRadius="lg"
                color='orange.400' fontSize={['sm', 'lg', '2xl']} textAlign='center' fontWeight='bold'
            >
                <Grid
                    templateRows={'repeat(1, 1fr)'}
                    templateColumns={'repeat(12, 1fr)'}
                    p={1} gap={2} textAlign='center'
                >
                    <GridItem colStart={1} colEnd={5} bg='gray.700'>
                        <Text color='blue.300'> Block Time:</Text>
                        <Text><Moment unix format="DD/MM/YY - hh:mm:ss">{block.block_timestamp}</Moment></Text>
                    </GridItem >

                    <GridItem colStart={5} colEnd={9} bg='gray.600'>
                        <Text color='blue.300'> Block Height:</Text>
                        <Text fontSize={['lg', 'xl', '3xl']} >{putCommas(block.block_height)}</Text>
                    </GridItem >

                    <GridItem colStart={9} colEnd={13} bg='gray.700'>
                        <Text color='blue.300' >Block Reward:</Text>
                        <Text mx={2} >{block.block_reward}</Text>
                    </GridItem >

                    <GridItem colStart={1} colEnd={13} bg='gray.700'>
                        <Text color='blue.300' >Block Hash:</Text>
                        <Text mx={2}>{block.block_hash}</Text>
                    </GridItem >

                    <GridItem colStart={1} colEnd={13} bg='gray.600'>
                        <Text color='blue.300' >
                            Block Mining Reward Transaction Hash:</Text>
                        <Text mx={2}>{block.block_mining_reward_transaction_hash}</Text>
                    </GridItem >

                    <GridItem colStart={1} colEnd={7} bg='gray.700' >
                        <Text mx={2} color='blue.300'>
                            Transaction Amount:
                        </Text>
                        <Text>{block.block_tx_amount}</Text>
                    </GridItem >

                    <GridItem colStart={7} colEnd={13} bg='gray.700'>
                        <Text color='blue.400' >Block Size:</Text>
                        <Text mx={2}>{block.block_size}</Text>
                    </GridItem >

                </Grid>

                {/* Block Transaction  */}
                {block.block_tx_amount > 0 && <BlockTransaction block={block} />}
            </MotionBox >
        )))
    );
};