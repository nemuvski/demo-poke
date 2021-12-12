import React from 'react'
import { useFetchPokemon } from '~/hooks/useFetchPokemon'

type Props = {
  idOrName: PokemonApi.IdOrName
}

const PokemonCard: React.FC<Props> = ({ idOrName }) => {
  const { data, isLoading, isError } = useFetchPokemon(idOrName)

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
    <article className='pokemon-card'>
      <h1 className='pokemon-card__name'>{data.name}</h1>
      <img className='pokemon-card__image' src={data.sprites.front_default} alt={data.name} />
    </article>
  )
}

export default PokemonCard
