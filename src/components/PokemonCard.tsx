import React from 'react'
import { useFetchPokemon } from '~/hooks/useFetchPokemon'
import LoadingSkeleton from '~/components/LoadingSkeleton'
import Maybe from '~/components/Maybe'

type Props = {
  idOrName: PokemonApi.IdOrName
}

const PokemonCard: React.FC<Props> = ({ idOrName }) => {
  const { data, isLoading, isFetching, isError } = useFetchPokemon(idOrName)

  return (
    <article className='pokemon-card'>
      <Maybe test={isError}>
        [{idOrName}]<br />
        Oops, an error occurred 😭
      </Maybe>

      <Maybe test={isLoading || isFetching}>
        <LoadingSkeleton />
      </Maybe>

      <Maybe test={!isError && !isLoading && !isFetching}>
        <h1 className='pokemon-card__name'>{data?.name}</h1>
        <img className='pokemon-card__image' loading='lazy' src={data?.sprites.front_default} alt={data?.name} />
      </Maybe>
    </article>
  )
}

export default PokemonCard
