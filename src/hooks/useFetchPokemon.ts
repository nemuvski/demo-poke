import { useQuery } from 'react-query'

const ENDPOINT = 'https://pokeapi.co/api/v2/pokemon'
const PAGE_SIZE = 20

export const useFetchPokemon = (idOrName: PokemonApi.IdOrName) => {
  return useQuery<PokemonApi.Single>(`pokemon--${idOrName}`, () =>
    fetch(`${ENDPOINT}/${idOrName}`).then((response) => response.json())
  )
}

export const useFetchPokemonList = (page: number, size = PAGE_SIZE) => {
  return useQuery<PokemonApi.List>(`pokemon-list--${page}`, () =>
    fetch(`${ENDPOINT}?offset=${size * page}&limit=${size}`).then((response) => response.json())
  )
}
