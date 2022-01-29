import React, { FC } from 'react';
import { useGetBlockchainDataQuery } from '../../store/blockchainData/blockchainData.api';

import { GlobalSpinner } from '../../components/spinner/Spinner';

export const Stats: FC = () => {

    const { data, error, isLoading, } = useGetBlockchainDataQuery();

    if (isLoading) {
        return <GlobalSpinner />
    }

    if (error) {
        return <h1>Something going wrong</h1>
    }

    console.log('data >>>', data);


    return (
        <div>
            Data
        </div>
    );
};