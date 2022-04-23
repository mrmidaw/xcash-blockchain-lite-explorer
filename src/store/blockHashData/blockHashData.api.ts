import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IBlockHashData {
    block_height: number;
    block_hash: string;
    block_size: number;
    block_tx_amount: number;
    block_reward: number;
    block_timestamp: number;
    block_difficulty: number;
}

export const blockHashDataApi = createApi({
    reducerPath: 'blockHashDataApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://explorer.xcash.foundation/' }),
    endpoints: (builder) => ({
        getBlockHashDataById: builder.query({
            query: (id) => `getblockdata?block_data=${id}`
        }),
    }),
});

export const { useGetBlockHashDataByIdQuery } = blockHashDataApi;