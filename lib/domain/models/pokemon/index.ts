
export interface IPokemonResultType {
  abilities?: IAbilityResultType[]
  base_experience?: number
  forms?: IPokemonResponse[]
  game_indices?: IGameIndicesType[]
  height?: number
  held_items?: any[]
  id?: number
  is_default?: boolean
  location_area_encounters?: any
  moves?: IMoveResultType[]
  name?: string
  order?: number
  past_types?: any
  species?: ISpeciesResultType
  sprites?: any
  stats?: IStatResultType[]
  types?: ITypeResultType[]
  weight?: number
}

export interface ITypeResultType {
  slot?: number
  type?: IPokemonResponse
}

export interface IStatResultType {
  base_stat?: number
  effort?: number
  stat?: IPokemonResponse
}

export interface IAbilityResultType extends IPokemonResponse {
  is_hiddeen?: boolean;
  slot?: number
}

export interface ISpeciesResultType extends IPokemonResponse { }

export interface IMoveResultType {
  move?: IPokemonResponse;
  version_group_details?: IVersionGroupDetailType[];
}

export interface IVersionGroupDetailType {
  level_learned_at?: number;
  move_learn_method?: IPokemonResponse;
  version?: IPokemonResponse;
}

export interface IGameIndicesType {
  game_index?: number
  version?: {
    name?: string
    url?: string
  }
}

export interface IPokemonResponse {
  name?: string
  url?: string
}

export interface IPokemonTransformData extends IPokemonResponse {
  img_url?: string
  img_alt?: string
  path_img?: string
}

export interface getPokemonParams {
  offset?: string | number
  limit?: string | number
}