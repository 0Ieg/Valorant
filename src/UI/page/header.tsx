import { FC, useState } from 'react'
import { styled } from 'styled-components'
import photo from '../../BLL/images/photo.png'

const HeaderStyled = styled.header`
height: 70px;
padding: 0 42px;
background-color: var(--color-black);
display: flex;
align-items: center;
justify-content: space-between;
.header__left{

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
    background-color: var(--color-white);
    width: 105px;
    border-radius: 5px;
    .dropdown__item{
      padding: 5px;
      cursor: pointer;
      transition: all 0.05s linear;
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
  fill: red;
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
          <ul className={isActive?"dropdown__list":"dropdown__list none"}>
            <div className="dropdown__item">Item 1</div>
            <div className="dropdown__item">Item 2</div>
            <div className="dropdown__item">Item 3</div>
            <div className="dropdown__item">Item 4</div>
            <div className="dropdown__item">Item 5</div>
          </ul>
        </div>
      </div>
    </HeaderStyled>
  )
}
