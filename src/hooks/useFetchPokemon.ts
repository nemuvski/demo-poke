import { useInfiniteQuery, useQuery } from 'react-query'

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon'
const PAGE_SIZE = 50

export const useFetchPokemon = (idOrName: PokemonApi.IdOrName) => {
  return useQuery<PokemonApi.Single>(`pokemon--${idOrName}`, () =>
    fetch(`${ENDPOINT}/${idOrName}`).then((response) => response.json())
  )
}

export const useFetchPokemonList = () => {
  return useInfiniteQuery<PokemonApi.List>(
    'pokemon-list',
    ({ pageParam = `${ENDPOINT}?offset=0&limit=${PAGE_SIZE}` }) => fetch(pageParam).then((response) => response.json()),
    {
      // nextプロパティには、次ページのパスが入っている
      getNextPageParam: (lastPageResponse) => lastPageResponse.next ?? false,
    }
  )
}
