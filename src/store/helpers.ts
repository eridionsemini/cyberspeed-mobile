import {createAsyncThunk} from '@reduxjs/toolkit';

import {rootReducer, store} from '.';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export type ThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue?: unknown;
};

export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkConfig>();
