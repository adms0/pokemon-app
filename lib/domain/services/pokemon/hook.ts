import {useEffect} from "react";
import {FetchNextPageOptions, InfiniteQueryObserverResult, useInfiniteQuery} from "@tanstack/react-query";
import {getListPokemons} from ".";
import {getPokemonParams} from "../../models/pokemon";
import transformData from "@/lib/utils/transformData";
import {IRESTApiResponse} from "../../models";


const LIMIT = 9
const PAGEPARAM = 0
export const fetchPokemons = async (params: getPokemonParams) => {
  const {data} = await getListPokemons({limit: LIMIT, offset: PAGEPARAM});
  data.results = transformData(data.results)
  return data
}


export const useFetchDataWithInfiniteScroll = () => {
  return useInfiniteQuery(
    ['pokemonList'],
    ({pageParam = PAGEPARAM}) => fetchPokemons({limit: LIMIT, offset: pageParam}),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.next) {
          const url = new URL(lastPage.next!);
          return url.searchParams.get('offset');
        }
        return null;
      },
    }
  );
}

export const useFetchNextPage = (
  hasNextPage: boolean | undefined,
  callBack: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<IRESTApiResponse, unknown>>
) => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  let fetching = false;
  const handleScroll = async (e: any) => {
    const {scrollHeight, scrollTop, clientHeight} =
      e.target.scrollingElement;
    if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
      fetching = true;
      if (hasNextPage) await callBack();
      fetching = false;
    }
  };
}