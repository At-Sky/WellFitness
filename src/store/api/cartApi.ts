import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const cartApi = createApi({
    reducerPath: 'cartApi',
    tagTypes: ['products'],
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
    endpoints: (build) => ({
        getProducts: build.query({
            query: (limit = '') => `products?${limit && `_limit=${limit}`}`,
            providesTags: (result) => result
                ? [
                    // @ts-ignore TODO: починить нахуй
                    ...result.map(({ id }) => ({ type: 'products', id })),
                    { type: 'products', id: 'LIST' },
                ]
                : [{ type: 'products', id: 'LIST' }],
        }),
        addProduct: build.mutation({
            query: (body) => ({
                url: 'products',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'products', id: 'LIST'}]
        }),
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'products', id: 'LIST'}]
        })
    })
});

export const {
    useGetProductsQuery,
    useAddProductMutation,
    useDeleteProductMutation
} = cartApi;
