import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// eslint-disable-next-line
interface ILastBlocks {
    block_height: string;
    block_hash: string;
    block_size: string;
    block_tx_amount: string;
    block_reward: string;
    block_timestamp: string;
    block_difficulty: string;
    block_mining_reward_tx_hash: string;
    block_tx_hashes: string;
    block_tx_ringsizes: string;
    block_tx_fees: string;
    block_tx_sizes: string;
    block_tx_paymentid_settings: string;
    block_tx_privacy_settings: string;
}


export const lastBlocksApi = createApi({
    reducerPath: 'lastBlocksApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://explorer.xcash.foundation/' }),
    endpoints: (build) => ({
        getLastBlocks: build.query({
            query: () => `getlastblockstransactiondata`,
        })
    })
});

export const { useGetLastBlocksQuery } = lastBlocksApi;