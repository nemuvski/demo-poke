import { useInfiniteQuery, useQuery } from 'react-query'
import { getPokemon, getPokemonList } from '~/infrastructure/pokemon-api'

export function useFetchPokemon(idOrName: PokemonApi.IdOrName) {
  return useQuery<PokemonApi.Single>(`pokemon--${idOrName}`, () => getPokemon(idOrName))
}

export function useFetchPokemonList() {
  return useInfiniteQuery<PokemonApi.List>('pokemon-list', ({ pageParam = 0 }) => getPokemonList(pageParam), {
    getNextPageParam: (lastPageResponse) => {
      // nextプロパティには次ページのパスが入っており、そこから次ページのoffsetパラメータを取り出す
      const { next } = lastPageResponse
      if (!next) return false
      const nextUrl = new URL(next)
      return nextUrl.searchParams.get('offset')
    },
  })
}
