import { FC } from "react";
import { styled } from "styled-components";
import heroAvatar from "../../BLL/images/Art_1.png"
import * as HA from "../../BLL/images/svgstorage";

const HeroesStyled = styled.div`
width: 100%;
padding: 0 70px 0 250px;
display: flex;
justify-content: space-between;
position: relative;
top: 70px;
overflow: visible;
`
export const Heroes:FC = ()=>{
  return(
    <HeroesStyled>
      <div className="empty"></div>
      <Hero name='Phoenix' country={'United Kingdom'} avatar={heroAvatar}/>
      <Hero name='Jett' country={'South Korea'} avatar={heroAvatar}/>
      <Hero name='Sova' country={'Russia'} avatar={heroAvatar}/>
      <Hero name='Sage' country={'China'} avatar={heroAvatar}/>
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
    padding: 10px;
    background-color: var(--color-black);
    border: 1px solid var(--color-white);
    position: absolute;
    z-index: 3;
    bottom: -10px;
    left: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: border 0.2s linear;
    .ability{
      cursor: pointer;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        height: 75%;
        fill: #F8F8F8;
        transition: fill 0.2s linear;
      }
      :hover{
        fill: red;
      }
    }
    &:hover{
      border: 1px solid var(--color-red);
    }
}
.information{
    position: relative;
    z-index: 4;
    top: -320px;
    left: -110px;
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
const Hero:FC<{name:String,country:String, avatar:any}> = (props)=>{
  const { name, country, avatar } = props
  return(
    <HeroStyled>
      <img className="image" src={avatar}/>
      <div className="abilities">
        <div className="ability"><HA.Hero1Ability1/></div>
        <div className="ability"><HA.Hero1Ability2/></div>
        <div className="ability"><HA.Hero1Ability3/></div>
        <div className="ability"><HA.Hero1Ability4/></div>
      </div>
      <div className="information">
      <div className="country">{country}</div>
        <div className="name">{name}</div>
      </div>
    </HeroStyled>
  )
}

