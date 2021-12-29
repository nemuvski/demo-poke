import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
})

export async function getPokemon(idOrName: PokemonApi.IdOrName) {
  const response = await Axios.get<PokemonApi.Single>(`/${idOrName}`)
  return response.data
}

export async function getPokemonList(offset: string | number, limit = 50) {
  const response = await Axios.get<PokemonApi.List>('/', { params: { offset, limit } })
  return response.data
}
