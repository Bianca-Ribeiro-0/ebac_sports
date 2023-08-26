import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutosQuery } = api
export default api
