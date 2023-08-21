import { FC } from "react";
import { styled } from "styled-components";

const HeroesStyled = styled.div`
`
export const Heroes:FC = ()=>{
  return(
    <HeroesStyled>
      <Hero/>
      <Hero/>
      <Hero/>
      <Hero/>
    </HeroesStyled>
  )
}


const HeroStyled = styled.div`
  
`
const Hero:FC = ()=>{
  return(
    <HeroStyled>
      Hero
    </HeroStyled>
  )
}

