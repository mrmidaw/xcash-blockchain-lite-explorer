import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IBlockchainData {
    maximum_supply: number;
    generated_supply: number;
    circulating_supply: number;
    maxium_block_size: string;
    average_block_size: string;
    block_height: number;
    current_blockchain_difficulty: number;
    blockchain_algorithm: string;
    current_blockchain_hashrate: string;
    current_estimated_blockchain_size: string;
    total_tx: number;
    private_tx_count: number;
    public_tx_count: number;
    total_tx_pool: number;
    blockchain_current_version: number;
    blockchain_current_version_block_height: number;
    blockchain_current_version_date: string;
    blockchain_next_version: number;
    blockchain_next_version_block_height: string;
    blockchain_next_version_estimated_date: string;
}

export const blockchainDataApi = createApi({
    reducerPath: 'blockchainDataApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://explorer.xcash.foundation/' }),
    endpoints: (build) => ({
        getBlockchainData: build.query({
            query: () => `getblockchaindata`,
        })
    })
})

export const {useGetBlockchainDataQuery} = blockchainDataApi;