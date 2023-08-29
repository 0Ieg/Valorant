import { FC } from "react";
import { styled } from "styled-components";
import heroImage from "../../BLL/images/Art_1.png"
import * as HA from "../../BLL/images/svgstorage";

const HeroesStyled = styled.div`
width: 100%;
padding: 0 70px 0 250px;
display: flex;
justify-content: space-between;
/* display: grid;
grid-template-columns: 80px repeat(4, 1fr);
grid-auto-rows: 415px;
gap: 70px; */
position: relative;
top: 70px;
overflow: visible;
`
export const Heroes:FC = ()=>{
  return(
    <HeroesStyled>
      <div className="empty"></div>
      <Hero name='Phoenix' country={'United Kingdom'}/>
      <Hero name='Jett' country={'South Korea'}/>
      <Hero name='Sova' country={'Russia'}/>
      <Hero name='Sage' country={'China'}/>
    </HeroesStyled>
  )
}


const HeroStyled = styled.div`
overflow: visible;
height: 415px;
width: 250px;
position: relative;
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
.information{
    position: absolute;
    z-index: 4;
    top: 60px;
    right: 165px;
    transform: rotate(90deg);
    .country{
      color: var(--color-red);
      font-size: 22px;
    }
    .name{
      font-size: 63px;
    }
}
`
const Hero:FC<{name:String,country:String}> = (props)=>{
  const { name, country } = props
  return(
    <HeroStyled>
      <img className="image" src={heroImage}/>
      <div className="abilities">
        <HA.Hero1Ability1/>
        <HA.Hero1Ability2/>
        <HA.Hero1Ability3/>
        <HA.Hero1Ability4/>
      </div>
      <div className="information">
      <div className="country">{country}</div>
        <div className="name">{name}</div>
      </div>
    </HeroStyled>
  )
}

