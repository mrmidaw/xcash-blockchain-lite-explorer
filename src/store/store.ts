import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import { blockchainDataApi } from "./blockchainData/blockchainData.api";
import { lastBlocksApi } from './lastBlocks/lastBlocks.api';
import { blockHashDataApi } from './blockHashData/blockHashData.api';
import { blockMiningRewardApi } from './blockMiningReward/blockMiningReward.api';
import { transactionDetailApi } from './transactionDetail/transactionDetail.api';

export const store = configureStore({
    reducer: {
        [lastBlocksApi.reducerPath]: lastBlocksApi.reducer,
        [blockchainDataApi.reducerPath]: blockchainDataApi.reducer,
        [blockHashDataApi.reducerPath]: blockHashDataApi.reducer,
        [blockMiningRewardApi.reducerPath]: blockMiningRewardApi.reducer,
        [transactionDetailApi.reducerPath]: transactionDetailApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(lastBlocksApi.middleware, blockchainDataApi.middleware, blockHashDataApi.middleware, blockMiningRewardApi.middleware, transactionDetailApi.middleware),
});

setupListeners(store.dispatch);

export type TypeRootState = ReturnType<typeof store.getState>;