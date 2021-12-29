import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { mount } from '@cypress/react'
import PokemonCard from '~/components/PokemonCard'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: false,
    },
  },
})

describe('[Component] PokemonCard', function () {
  it('「pikachu」のデータを取得し、要素に情報が出力される', function () {
    mount(
      <QueryClientProvider client={queryClient}>
        <PokemonCard idOrName='pikachu' />
      </QueryClientProvider>
    )

    cy.get('.pokemon-card').children('.loading-skeleton').should('be.visible')

    cy.get('.pokemon-card__name').contains(/^pikachu$/)
    cy.get('.pokemon-card__image').should('be.visible')
  })

  it('存在しない名前のデータ取得を試みるが、取得できずエラーの旨が出力される', function () {
    mount(
      <QueryClientProvider client={queryClient}>
        <PokemonCard idOrName='not-found' />
      </QueryClientProvider>
    )

    cy.get('.pokemon-card').contains(/an error occurred/)
  })
})
