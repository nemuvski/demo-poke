import React from 'react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'
import Layout from '~/components/Layout'
import PokemonList from '~/components/PokemonList'
import LoadingSkeleton from '~/components/LoadingSkeleton'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <ErrorBoundary fallbackRender={() => <>Oops, an error occurred 😭</>}>
          <React.Suspense fallback={<LoadingSkeleton />}>
            <PokemonList />
          </React.Suspense>
        </ErrorBoundary>
      </Layout>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
