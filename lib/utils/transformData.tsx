import {POKEMON_IMAGE_URL} from "../constants/imageUrlFormat";
import {IPokemonResponse, IPokemonTransformData} from "../domain/models/pokemon";

const pokemonImgUrl = (name: string) => `${POKEMON_IMAGE_URL}${name}.jpg`

const transformData = (data: IPokemonResponse[]): IPokemonTransformData[] => {
  return data?.map((e) => ({
    ...e,
    name: `${e.name?.slice(0, 1).toUpperCase() + e.name?.slice(1)}`,
    url: e.url,
    img_alt: `${e.name} image`,
    path_img: `/pokemon/${encodeURIComponent(e.name)}`,
    img_url: pokemonImgUrl(e.name)
  }))
}

export default transformData