import {configureStore, combineReducers} from "@reduxjs/toolkit";
import ProductSlice from './slice/ProductReducer'
import NavbarSlice from './slice/NavbarReducer'
import HomeReducer from "./slice/HomeReducer";
import AccountReducer from "./slice/AccountReducer";

import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'


const reducer = combineReducers({
    product: ProductSlice,
    navbar: NavbarSlice,
    home: HomeReducer,
    account: AccountReducer,
})

const persistConfig = {
    key: 'Zeke',
    storage,
    whitelist: ['account'],
}
const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})

export default store

