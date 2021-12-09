import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import Poke from '~/components/Poke'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Poke />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
