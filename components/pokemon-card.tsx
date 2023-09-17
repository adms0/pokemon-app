/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react"
import {IPokemonTransformData} from "@/lib/domain/models/pokemon"
import {ImageWrapper, StyledImage, StyledPokemon, Title} from "@/lib/styles/StyledPokemon"

const PokemonCard: React.FC<IPokemonTransformData> = ({...props}) => {
  const {name, img_alt, path_img, img_url} = props
  return (
    <StyledPokemon>
      <ImageWrapper>
        <StyledImage>
          <img src={img_url!} alt={img_alt!} width={150} height={175} />
        </StyledImage>
      </ImageWrapper>
      <Title>
        {name}
      </Title>
    </StyledPokemon>
  )
}

export default PokemonCard