import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface ITransactionData {
    tx_block_height: number;
    tx_block_timestamp: number;
    tx_version: number;
    tx_settings: string;
    tx_ringct_version: number;
    tx_fee: number;
    tx_size: number;
    tx_unlock_block: number;
    tx_extra: string;
    tx_ringsize: number;
    tx_addresses: string;
    tx_ecdh_data: string;
    tx_key_images: string;
    tx_key_images_ring_address: string;
    tx_key_images_ring_tx_hash: string;
    tx_key_images_ring_address_tx_ring_addresses: string;
    tx_key_images_ring_address_tx_block_height: string;
    tx_key_images_ring_address_tx_extra: string;
    tx_key_images_ring_address_tx_ecdh_data: string;
    tx_key_images_ring_address_tx_ring_size: string;
    tx_key_images_ring_address_tx_block_timestamp: string;
}

export const transactionDetailApi = createApi({
    reducerPath: 'transactionDetailApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://explorer.xcash.foundation/' }),
    endpoints: (builder) => ({
        getTransactionDetailById: builder.query<ITransactionData, string>({
            query: (id) => `gettransactiondata?tx_hash=${id}`
        })
    }),
});

export const { useGetTransactionDetailByIdQuery } = transactionDetailApi;