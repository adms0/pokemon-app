import styled from "styled-components";
import Image from 'next/image';

export const StyledPokemon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:white;
  border-radius: 20px;
  padding: 1rem;
  gap: 1rem;
  margin: 2rem 0.75rem 0;
  border: 1px solid #000;
}
`
export const Title = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 1rem;
  color: #000;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`
export const StyledImage = styled.image`
img { 
  width: 100%;
  max-height: 350px; 
  transition: all 0.5s ease;
  :hover { 
    opacity: 0.9;
  }
  oobject-fit: contain;
  border-radius: 20px;
  background: transparent,
  border: 1px solid rgba(0, 0, 0, 0);
  &:hover {
    transform: scale(1.03);
    ::after {
      transform: scaleY(1);
      opacity: 1
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    border-radius: 0.8rem;
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    z-index: -99;
    box-shadow: 0rem 2rem 5rem hsl(58deg 94% 66%);
    transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .clickable {
    cursor: pointer;
  }   
}
`
