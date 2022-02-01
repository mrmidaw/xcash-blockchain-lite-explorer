import React, { FC } from 'react';
import { useGetLastBlocksQuery } from '../../store/lastblocks/lastBlocks.api';
import { BlockTransaction, IBlockTransaction } from './BlockTransaction';
import Moment from 'react-moment';
import { GlobalSpinner } from '../../components/spinner/Spinner';
import { Error } from '../error/Error';
import { Box, useColorMode, Grid, GridItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';


export const Blocks: FC = () => {
    const { data, isLoading, error } = useGetLastBlocksQuery();
    const { colorMode } = useColorMode();

    // Framer Motion
    const MotionBox = motion(Box)
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    // Function for placing commas in numbers
    const putCommas = (num: number) => {
        return num.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    };

    if (isLoading) {
        return <GlobalSpinner />
    }

    if (error) {
        return <Error />
    }

    // From Api come global Object. This function return array from object to render in the component
    const modifyFetchLastBlocks = () => {
        const dataObj: {} = Object.values(data);

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
        console.log('block_height>>>', block_height);

        const totalBlocksArray: any[] = [];
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
        };
        return totalBlocksArray;
    };

    const totalBlocksArray = modifyFetchLastBlocks();


    return (
        (totalBlocksArray.map((block: IBlockTransaction) => (
            <MotionBox
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ duration: 0.8, times: [0, 0.5, 1] }}
                key={block.block_height}
                bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
                p={1} my={4} mx='auto' maxW='96%' borderRadius="lg"
                color='black' fontSize={['sm', 'lg', '2xl']} textAlign='center' fontWeight='medium'
            >
                <Grid
                    p={1}
                    templateRows={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
                    templateColumns={['repeat(6, 1fr)', 'repeat(6, 1fr)']}
                    gap={2}
                >
                    <GridItem rowSpan={2} colSpan={1} bg='brown' textAlign='center'>
                        <Text >Block Size:</Text>
                        <Text >{block.block_size}</Text>
                    </GridItem >

                    <GridItem colSpan={3} bg='red.400'>
                        <Text > Block Height:</Text>
                        <Text >{putCommas(block.block_height)}</Text>
                    </GridItem >

                    <GridItem colSpan={2} bg='teal.300'>
                        <Text >Block Reward:</Text>
                        <Text >{block.block_reward}</Text>
                    </GridItem >

                    <GridItem colSpan={4} bg='telegram.700' >
                        <Text > Block Time:</Text>
                        <Text >
                            <Moment unix format="DD/MM/YY - hh:mm:ss">
                                {block.block_timestamp}
                            </Moment>
                        </Text>
                    </GridItem >

                    <GridItem rowSpan={2} colSpan={1} bg='skyblue'>
                        <Text>Block Transaction Amount:</Text>
                        <Text>{block.block_tx_amount}</Text>
                    </GridItem >

                    <GridItem colSpan={5} bg='twitter.400'>
                        <Text >Block Hash:</Text>
                        <Text>{block.block_hash}</Text>
                    </GridItem >
                </Grid>

                {/* Block Transaction  */}
                {block.block_tx_amount > 0 && <BlockTransaction block={block} />}
            </MotionBox>
        )))
    );
};