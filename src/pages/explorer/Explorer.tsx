import React, { FC } from 'react';
import { useGetLastBlocksQuery } from '../../store/lastblocks/lastBlocks.api';


export const Explorer: FC = () => {
    const { data, isLoading, error } = useGetLastBlocksQuery();

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>Something going wrong...</h2>
    }   


    return (
        <div>

        </div>
    );
};