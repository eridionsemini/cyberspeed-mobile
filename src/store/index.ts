import AsyncStorage from '@react-native-async-storage/async-storage';
import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import logger from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PersistConfig,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import {apiSlice} from './api';
import {favouriteMoviesReducer} from './favourites';
import {RootState} from './helpers';

export const rootReducer = combineReducers({
  favourites: favouriteMoviesReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const appReducer = (state: RootState | undefined, action: Action): RootState => {
  ///  clear redux state after logout
  if (action.type === 'user/logout') {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favourites'],
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, appReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([apiSlice.middleware, logger]),
});

const persistedStore = persistStore(store);

export {store, persistedStore};

setupListeners(store.dispatch);
