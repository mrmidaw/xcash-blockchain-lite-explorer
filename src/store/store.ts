import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import { lastBlocksApi } from './lastBlocks/lastBlocks.api';
import { blockchainDataApi } from "./blockchainData/blockchainData.api";

export const store = configureStore({
    reducer: {
        [lastBlocksApi.reducerPath]: lastBlocksApi.reducer,
        [blockchainDataApi.reducerPath]: blockchainDataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(lastBlocksApi.middleware, blockchainDataApi.middleware),        
});
setupListeners(store.dispatch);

export type TypeRootState = ReturnType<typeof store.getState>;