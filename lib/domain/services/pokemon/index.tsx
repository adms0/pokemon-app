import {IRESTApiResponse} from "../../models";
import qs from 'query-string'
import {IPokemonResponse, getPokemonParams} from "../../models/pokemon";
import axios, {AxiosResponse} from 'axios'

export const getListPokemons = async (params: getPokemonParams): Promise<AxiosResponse<IRESTApiResponse<any>>> => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon?${qs.stringify(params)}`)
}