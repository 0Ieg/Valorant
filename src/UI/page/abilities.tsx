import { FC } from "react";
import { styled } from "styled-components";

const AbilitiesStyled = styled.div`
display: flex;
justify-content: space-between;
.right{
  height: 150px;
  width: 140px;
  background-color: var(--color-white);
}
`
export const Abilities:FC = ()=>{
  return(
    <AbilitiesStyled>
      <Ability level={'BASIC'} title={'Slow Orb'} description={'Cast out a radianite orb that breaks into a slowing field upon impact with the ground.'}/>
      <Ability level={'SIGNATURE'} title={'Healing Orb'} description={'Heal an ally or yourself to full health over a few seconds.'}/>
      <Ability level={'ULTIMATE'} title={'Resurrection'} description={'Target a friendly corpse. After a short delay, revive them with full health.'}/>
      <div className="right"></div>
    </AbilitiesStyled>
  )
}



const AbilityStyled = styled.div`
height: 150px;
width: 420px;
padding: 10px 20px;
background-color: var(--color-white);
border: 2px solid var(--color-black);
position: relative;
.level {
  font-size: 24px;
  font-weight: 700;
  font-family: Montserrat;
  color: var(--color-gray);
  padding-bottom: 10px;
}
.title {
  font-size: 20px;
  padding-bottom: 10px;
}
.description {
  font-family: Montserrat;
  font-size: 14px;
  width: 220px;
}
.square {
  height: 100px;
  width: 100px;
  background-color: var(--color-red);
  position: absolute;
  right: 50px;
  bottom: 0;
}
.image {
}
`
export const Ability:FC<{level:String,title:String,description:String}> = (props)=>{
  const {level, title, description} = props
  return(
    <AbilityStyled>
      <div className="level">{level}</div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="square"></div>
      <div className="image"></div>
    </AbilityStyled>
  )
}