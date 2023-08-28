import { FC } from "react";
import { styled } from "styled-components";
import heroImage from "../../BLL/images/Art_1.png"
import * as HA from "../../BLL/images/svgstorage";

const HeroesStyled = styled.div`
width: 100%;
padding: 0 70px;
display: grid;
grid-template-columns: 80px repeat(4, 1fr);
grid-auto-rows: 415px;
gap: 70px;
position: relative;
top: 70px;
overflow: visible;
`
export const Heroes:FC = ()=>{
  return(
    <HeroesStyled>
      <div className="empty"></div>
      <Hero name='Phoenix'/>
      <Hero name='Jett'/>
      <Hero name='Sova'/>
      <Hero name='Sage'/>
    </HeroesStyled>
  )
}


const HeroStyled = styled.div`
overflow: visible;
.background{
  background-color: green;
  height: 100%;
  padding: 0 0 15px 30px;
  position: relative;
  overflow: visible;
  .image{
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
  }
  .abilities{
    width: calc(100% - 30px);
    height: 60px;
    background-color: var(--color-black);
    border: 1px solid var(--color-white);
    position: absolute;
    z-index: 3;
    bottom: -10px;
    left: 50px;
  }
  .name{
    position: absolute;
    top: 13px;
    left: 13px;
    width: 26px;
  }
}
`
const Hero:FC<{name:String}> = (props)=>{
  const {name} = props
  return(
    <HeroStyled>
      <div className="background">
        <img className="image" src={heroImage}/>
        <div className="abilities">
          <HA.Hero1Ability1/>
          <HA.Hero1Ability2/>
          <HA.Hero1Ability3/>
          <HA.Hero1Ability4/>
        </div>
        <div className="name">{name}</div>
      </div>
    </HeroStyled>
  )
}

