import { FC } from "react";
import { styled } from "styled-components";
import Phoenix from "../../BLL/images/Art_1.png"
import Jett from "../../BLL/images/Art_2.png"
import Sova from "../../BLL/images/Art_3.png"
import Sage from "../../BLL/images/Art_4.png"
import * as HA from "../../BLL/images/svgstorage";
import { Link } from "react-router-dom";

const HeroesStyled = styled.div`
height: 415px;
width: 100%;
padding-left: 180px;
display: flex;
justify-content: space-between;
position: relative;
overflow: visible;
margin: 70px 0 60px;
`
export const Heroes:FC = ()=>{
  return(
    <HeroesStyled>
      <div className="empty"></div>
      <Hero name='Phoenix' country={'United Kingdom'} avatar={Phoenix}/>
      <Hero name='Jett' country={'South Korea'} avatar={Jett}/>
      <Hero name='Sova' country={'Russia'} avatar={Sova}/>
      <Hero name='Sage' country={'China'} avatar={Sage}/>
    </HeroesStyled>
  )
}


const HeroStyled = styled.div`
overflow: visible;
height: 100%;
width: 250px;
position: relative;
cursor: pointer;
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
        fill: var(--color-red);
      }
    }
    &:hover{
      border: 1px solid var(--color-red);
    }
}
.information{
  font-family: DrukWide;
  position: relative;
  z-index: 4;
  top: -320px;
  left: -110px;
  transform: rotate(90deg);
  .country{
    color: var(--color-red);
    font-size: 12px;
    letter-spacing: 1px;
  }
  .name{
    font-size: 40px;
    color: transparent;
    -webkit-text-stroke: 1px white;
    transition: color 0.2s linear;
  }
}
&:hover{
  .name{
    color: var(--color-red);
  }
}
`
const Hero:FC<{name:String,country:String, avatar:any}> = (props)=>{
  const { name, country, avatar } = props
  return(
    <HeroStyled>
      <Link to={`${name.toLowerCase()}`}>
        <img className="image" src={avatar}/>
        <div className="abilities">
          <div className="ability"><HA.Hero1Ability1/></div>
          <div className="ability"><HA.Hero1Ability2/></div>
          <div className="ability"><HA.Hero1Ability3/></div>
          <div className="ability"><HA.Hero1Ability4/></div>
        </div>
        <div className="information">
        <div className="country">{country}</div>
          <span className="name">{name}</span>
        </div>
      </Link>
    </HeroStyled>
  )
}

