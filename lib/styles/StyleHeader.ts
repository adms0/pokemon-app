import styled from "styled-components";

export const StyledHeader = styled.div`
  background: hsl(0deg 4% 97%); 
  padding: 0 20px;
  box-sizing: border-box;

  .header-content { 
    max-width:1366px;
    min-height:120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width:500px) {
      max-width:1366px;
      min-height:0px;
    }
  }
`

export const StyledPokemonLogo = styled.img`
  width: 150px;
  height: 70px;
  margin-top: 0px;

  @media screen and (max-width:500px) {
    width: 150px;
    height: 50px;
    margin-top: 5px
  }
`