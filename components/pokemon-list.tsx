'use client'
import {IPokemonTransformData} from '@/lib/domain/models/pokemon'
import {useFetchDataWithInfiniteScroll, useFetchNextPage} from '@/lib/domain/services/pokemon/hook'
import PokemonCard from './pokemon-card'
import Grid from '@/lib/elements/Grid'
import {useEffect} from 'react'
import {useInView} from "react-intersection-observer";
import Spinner from '@/lib/elements/Spinner'
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
const PokemonList: React.FC<any> = ({...props}) => {
  const {ref, inView} = useInView();

  const {data, isSuccess, hasNextPage, fetchNextPage, isInitialLoading, ...dax} = useFetchDataWithInfiniteScroll()
  console.log(data, hasNextPage, isSuccess, fetchNextPage, isInitialLoading, dax, '<<<Das')
  useFetchNextPage(hasNextPage, fetchNextPage)

  return (
    <>
      <Grid >
        {
          data?.pages?.map((page) => {
            return (page?.results as IPokemonTransformData[])?.map((res) => (
              <PokemonCard
                name={res.name}
                url={res.url}
                img_alt={res.img_alt}
                img_url={res.img_url}
                key={res.name}
                path_img={res.path_img}
              />
            ))
          })
        }
      </Grid >
      {isInitialLoading && <Spinner />}
    </>
  )

}

export default PokemonList
