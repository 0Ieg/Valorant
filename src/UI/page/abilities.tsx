import { FC } from "react";
import { styled } from "styled-components";
import { Hero4Ability1, Hero4Ability3, Hero4Ability4 } from "../../BLL/images/svgstorage";

const AbilitiesStyled = styled.div`
display: flex;
justify-content: space-between;
.right{
  height: 150px;
  width: 140px;
  background-color: var(--color-white);
  position: relative;
  cursor: pointer;
  border: 2px solid var(--color-black);
  svg{
    position: absolute;
    width: 80px;
    fill: var(--color-black);
    top: 50%;
    left: 50%;
    z-index: 6;
    transform: translateX(-50%) translateY(-50%);
    transition: fill 0.2s linear;
  }
  &:hover svg{
    fill: var(--color-red);
  }
}
`
export const Abilities:FC = ()=>{
  return(
    <AbilitiesStyled>
      <Ability level={'BASIC'} title={'Slow Orb'} Image={Hero4Ability1} description={'Cast out a radianite orb that breaks into a slowing field upon impact with the ground.'}/>
      <Ability level={'SIGNATURE'} title={'Healing Orb'} Image={Hero4Ability3} description={'Heal an ally or yourself to full health over a few seconds.'}/>
      <Ability level={'ULTIMATE'} title={'Resurrection'} Image={Hero4Ability4} description={'Target a friendly corpse. After a short delay, revive them with full health.'}/>
      <div className="right">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
        </svg>
      </div>
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
cursor: pointer;
.level {
  font-size: 24px;
  font-family: DrukWide;
  color: var(--color-gray);
  padding-bottom: 10px;
  transition: color 0.2s linear;
}
.title {
  font-family: DrukWide;
  font-size: 14px;
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
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  svg{
    fill: var(--color-black);
    width: 80px;
  }
}
&:hover{
  .level{
    color: var(--color-red);
  }
}
`
export const Ability:FC<{level:String,title:String,description:String, Image:any}> = (props)=>{
  const {level, title, description, Image} = props
  return(
    <AbilityStyled>
      <div className="level">{level}</div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="square"></div>
      <div className="image"><Image/></div>
    </AbilityStyled>
  )
}