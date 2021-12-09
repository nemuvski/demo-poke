import { useQuery } from 'react-query'

export const useFetchPokemon = (key: string | number) => {
  return useQuery('poke', () => fetch(`https://pokeapi.co/api/v2/pokemon/${key}`).then((response) => response.json()))
}
