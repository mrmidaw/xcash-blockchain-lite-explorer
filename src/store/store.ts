import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';

import { lastBlocksApi } from './lastblocks/lastBlocks.api';

export const store = configureStore({
    reducer: {
        [lastBlocksApi.reducerPath]: lastBlocksApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(lastBlocksApi.middleware),
});
setupListeners(store.dispatch);

export type TypeRootState = ReturnType<typeof store.getState>;