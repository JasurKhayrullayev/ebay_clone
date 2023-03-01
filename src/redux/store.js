import { createStore } from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import rootReducer from "./combineReducer";

const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ['login' , 'book']
} 

const percictReducerMain = persistReducer(persistConfig, rootReducer);
const store = createStore(percictReducerMain);
const persistor = persistStore(store);

export { store ,persistor };