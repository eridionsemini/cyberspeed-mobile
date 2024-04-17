import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = '';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({

    }),
});
