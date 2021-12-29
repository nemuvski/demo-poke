import React, { useRef } from 'react'
import { useFetchPokemonList } from '~/hooks/useFetchPokemon'
import PokemonCard from '~/components/PokemonCard'
import LoadingSkeleton from '~/components/LoadingSkeleton'
import Maybe from '~/components/Maybe'
import useIntersectionObserver from '~/hooks/useIntersectionObserver'

const PokemonList = () => {
  const observeElementRef = useRef<HTMLButtonElement | null>(null)

  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } = useFetchPokemonList()

  useIntersectionObserver(observeElementRef, () => fetchNextPage(), {
    threshold: 1.0,
    rootMargin: '0px',
  })

  return (
    <div className='pokemon-list'>
      {data?.pages.map((group, groupNum) => (
        <React.Fragment key={groupNum}>
          {group.results.map((item) => (
            <PokemonCard idOrName={item.name} key={item.name} />
          ))}
        </React.Fragment>
      ))}

      <Maybe test={!!hasNextPage}>
        <button type='button' ref={observeElementRef} disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? 'Now loading' : 'Load more'}
        </button>
      </Maybe>

      <Maybe test={isFetching || isFetchingNextPage}>
        <LoadingSkeleton />
      </Maybe>
    </div>
  )
}

export default PokemonList
