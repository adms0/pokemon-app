import {IPokemonTransformData} from "./pokemon"

export interface IRESTApiResponse<T = IPokemonTransformData[]> {
  count: number
  next?: string
  results: T
  previous?: string
}