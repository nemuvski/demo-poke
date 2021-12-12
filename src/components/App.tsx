import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '~/components/Layout'
import PokemonList from '~/components/PokemonList'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <PokemonList />
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
