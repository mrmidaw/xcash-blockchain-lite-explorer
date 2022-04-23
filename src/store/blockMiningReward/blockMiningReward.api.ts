import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IBlockMiningReward {
    tx_block_height: number;
    tx_block_timestamp: number;
    tx_version: number;
    tx_settings: string;
    tx_ringct_version: number;
    tx_size: number;
    tx_unlock_block: number;
    tx_extra: string;
    tx_address: string;
    tx_address_amount: number;
}

export const blockMiningRewardApi = createApi({
    reducerPath: 'blockMiningRewardApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://explorer.xcash.foundation/' }),
    endpoints: (builder) => ({
        getBlockMiningRewardById: builder.query<IBlockMiningReward, string>({
            query: (id) => `gettransactiondata?tx_hash=${id}`
        })
    }),
});

export const { useGetBlockMiningRewardByIdQuery } = blockMiningRewardApi;