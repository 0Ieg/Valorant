import { FC, useState } from 'react'
import { styled } from 'styled-components'
import photo from '../../BLL/images/photo.png'
import { NavLink, Link } from 'react-router-dom'

const HeaderStyled = styled.header`
height: 70px;
padding: 0 42px;
background-color: var(--color-black);
display: flex;
align-items: center;
justify-content: space-between;
font-family: Montserrat;
.header__left{
  display: flex;
  align-items: center;
  gap: 30px;
.logos{
  display: flex;
  gap: 15px;
  cursor: pointer;
  .logo_left, .logo_right{
    height: 30px;
    path{
      fill: var(--color-white);
    }
  }
  .separator{
    height: 30px;
    width: 3px;
    transition: all 0.1s linear;
    background-color: var(--color-white);
  }
  &:hover{
    .separator{
      box-shadow: 0 0 15px var(--color-red);
      background-color: var(--color-red);
    }
  }
}
.menu{
  .menu__list{
    display: flex;
    gap: 15px;
    .menu__item{
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      a{
        color: var(--color-white);
        border-bottom: 3px solid transparent;
        border-top: 3px solid transparent;
        display: block;
        padding: 6px;
        transition: border-bottom 0.2s linear, color 0.2s linear;
        &:hover{
          color: var(--color-red);
        }
      }
      .active{
        border-bottom: 3px solid var(--color-red);
        
      }
    }
  }
}
}
.header__right{
  display: flex;
  align-items: center;
  gap: 16px;
  .photo{
    width: 42px;
    border-radius: 50%;
  }
  .dropdown__button{
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 5px 0;
    span{
      color: var(--color-white);
      font-weight: 700;
    }
    svg{
      transition: all 0.1s cubic-bezier(.06,.68,.96,.48);
      width: 16px;
    }
  }
  .dropdown__list{
    position: absolute;
    z-index: 5;
    background-color: var(--color-white);
    width: 105px;
    border-radius: 5px;
    .dropdown__item{
      cursor: pointer;
      transition: all 0.05s linear;
      a{
        padding: 6px;
        display: block;
      }
      .active{
        color: var(--color-red);
        font-weight: 700;
      }
      &:hover{
        background-color: var(--color-light-gray);
        font-weight: 700;
      }
    }
  }
}
.none{
  display: none;
}
.rotate{
  transform: rotate(180deg);
  fill: var(--color-red);
}
`
export const Header:FC = ()=>{
  const [isActive, setIsActive] = useState(false)
  const dropdownHandler = ()=>{
    isActive?setIsActive(false):setIsActive(true)
  }
  return(
    <HeaderStyled>
      <div className="header__left">
        <Link to={'/'}>
          <div className="logos">
            <svg className='logo_left' viewBox="0 0 79 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M74.8115 35.5942L67.7143 34.4348V33.5072L74.5788 33.2754L74.4624 31.5362H65.7364L65.271 35.942L72.4845 37.2174V38.029L64.9219 38.3768L64.6892 40H75.2769L74.8115 35.5942ZM6.86451 34.8986L6.74816 36.5217L9.3078 36.6377V38.2609L3.83947 38.1449L4.07217 33.3913L11.5184 33.2754L11.4021 31.5362H1.74522L0.930784 40H11.8675L11.6348 34.7826L6.86451 34.8986ZM53.2872 38.029V36.5217L58.4065 36.4058V34.7826L53.1708 34.6667V33.1594L60.0353 33.0435V31.3044H50.7275L50.4948 40H60.268L60.1517 38.2609L53.2872 38.029ZM45.8409 40L44.9102 31.4203H42.4669L38.8601 35.4783L35.2533 31.4203H32.81L31.9956 40H34.9043L35.137 34.4348L38.8601 38.2609L42.5832 34.4348L42.8159 40H45.8409ZM33.5081 0H27.6907L27.2253 26.5507H34.2062L33.5081 0ZM57.243 0H39.0928L38.3947 26.5507H58.5228L57.243 0ZM51.6583 20.7536L45.2592 20.9855L44.9102 5.33333L51.6583 5.56522V20.7536ZM79 5.7971L78.3019 0H60.3844L60.6171 5.10145L66.3181 5.33333L66.8998 26.5507H73.997L71.9028 5.56522L79 5.7971ZM16.2887 26.5507H23.9676L18.9647 14.6087L22.9205 12.4058L20.2445 0H0.69809L0 5.7971L4.42121 5.68116L2.32695 26.6667H9.19146L9.42415 19.942L14.3108 17.2754L16.2887 26.5507ZM9.7732 5.33333L15.3579 5.21739L16.056 10.5507L9.5405 13.5652L9.7732 5.33333ZM24.8984 40H27.8071L25.4801 31.4203H18.4993L16.1723 40H19.081L19.5464 37.7971L24.3166 37.913L24.8984 40ZM20.0118 36.1739L20.5935 33.3913L23.3859 33.2754L23.9676 36.058L20.0118 36.1739Z"/>
            </svg>
            <div className="separator"></div>
            <svg className='logo_right' viewBox="0 0 48 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 19.8347V0L31.9451 40H15.9726L0 19.8347Z"/>
              <path d="M42.6484 26.6116H27.0051L48 0V19.8347L42.6484 26.6116Z"/>
            </svg>
          </div>
        </Link>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <NavLink to={'game'}>GAME</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'champions'}>CHAMPIONS</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'news'}>NEWS</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'pathnotes'}>PATCH NOTES</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'discover'}>DISCOVER</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'esports'}>ESPORTS</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'universe'}>UNIVERSE</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'shop'}>SHOP</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={'support'}>SUPPORT</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <img className='photo' src={photo} alt="" />
        <div className="dropdown">
          <button className='dropdown__button' onClick={dropdownHandler}>
            <span>UNEPICKID</span>
            <svg className={isActive?'rotate':''} fill='#F8F8F8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          <ul className={isActive?"dropdown__list":"dropdown__list none"} onClick={dropdownHandler}>
            <div className="dropdown__item">
              <NavLink to={'item1'}>Item 1</NavLink>
            </div>
            <div className="dropdown__item">
              <NavLink to={'item2'}>Item 2</NavLink>
            </div>
            <div className="dropdown__item">
              <NavLink to={'item3'}>Item 3</NavLink>
            </div>
            <div className="dropdown__item">
              <NavLink to={'item4'}>Item 4</NavLink>
            </div>
            <div className="dropdown__item">
              <NavLink to={'item5'}>Item 5</NavLink>
            </div>
          </ul>
        </div>
      </div>
    </HeaderStyled>
  )
}
