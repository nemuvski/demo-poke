import React from 'react'
import { useFetchPokemonList } from '~/hooks/useFetchPokemon'
import PokemonCard from '~/components/PokemonCard'

const PokemonList = () => {
  const { data, isLoading, isError } = useFetchPokemonList(0)

  if (isLoading) {
    return <>Loading</>
  }

  if (isError) {
    return <>Error 😭</>
  }

  if (!data) {
    return null
  }

  return (
    <div className='pokemon-list'>
      {data.results.map((item) => (
        <PokemonCard idOrName={item.name} key={item.name} />
      ))}
    </div>
  )
}

export default PokemonList
