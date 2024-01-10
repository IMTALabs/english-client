import { configureStore } from "@reduxjs/toolkit";;

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

import { allReducer } from "./all-reducer";

import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistState = {
    key: 'root',
    storage,
}


const persistedReducer = persistReducer(persistState, allReducer)

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;