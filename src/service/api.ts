import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from './../App'
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/produtos'
  }),
  endpoints: (builder) => ({
    getCarrinho: builder.query<Game[], void>({
      query: () => ''
    })
  })
})
export const { useGetCarrinhoQuery } = api
export default api
