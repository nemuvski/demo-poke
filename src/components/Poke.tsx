import React from 'react'
import { useFetchPokemon } from '~/hooks/useFetchPokemon'

const Poke = () => {
  const { data, isLoading, isError } = useFetchPokemon('pikachu')

  if (isLoading) {
    return <>Loading</>
  }

  if (isError) {
    return <>Error 😭</>
  }

  return (
    <div>
      <h1>{data.species.name}</h1>
      <img src={data.sprites.front_default} alt={data.species.name} />
    </div>
  )
}

export default Poke
