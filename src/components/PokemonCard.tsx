import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useFetchPokemon } from '~/hooks/useFetchPokemon'
import LoadingSkeleton from '~/components/LoadingSkeleton'

type Props = {
  idOrName: PokemonApi.IdOrName
}

const Inner: React.FC<Props> = ({ idOrName }) => {
  const { data } = useFetchPokemon(idOrName)
  return (
    <>
      <h1 className='pokemon-card__name'>{data?.name}</h1>
      <img className='pokemon-card__image' loading='lazy' src={data?.sprites.front_default} alt={data?.name} />
    </>
  )
}

const PokemonCard: React.FC<Props> = ({ idOrName }) => {
  return (
    <article className='pokemon-card'>
      <ErrorBoundary
        fallbackRender={() => (
          <>
            [{idOrName}]<br />
            Oops, an error occurred 😭
          </>
        )}
      >
        <React.Suspense fallback={<LoadingSkeleton />}>
          <Inner idOrName={idOrName} />
        </React.Suspense>
      </ErrorBoundary>
    </article>
  )
}

export default PokemonCard
