import { FC } from "react";
import { styled } from "styled-components";

const AbilitiesStyled = styled.div`
`
export const Abilities:FC = ()=>{
  return(
    <AbilitiesStyled>
      <Ability level={'BASIC'} title={'Slow Orb'} description={'Cast out a radianite orb that breaks into a slowing field upon impact with the ground.'}/>
      <Ability level={'SIGNATURE'} title={'Healing Orb'} description={'Heal an ally or yourself to full health over a few seconds.'}/>
      <Ability level={'ULTIMATE'} title={'Resurrection'} description={'Target a friendly corpse. After a short delay, revive them with full health.'}/>
    </AbilitiesStyled>
  )
}



const AbilityStyled = styled.div`
`
export const Ability:FC<{level:String,title:String,description:String}> = (props)=>{
  const {level, title, description} = props
  return(
    <AbilityStyled>

    </AbilityStyled>
  )
}