import { FC } from 'react'
import { styled } from 'styled-components'
import back from '../../BLL/images/background.png'

const MainStyled = styled.main`
background-color: var(--color-red);
background-image: url(${back});
background-size: cover;
flex-grow: 1;
`
export const Main:FC = ()=>{
  return(
    <MainStyled>
      
    </MainStyled>
  )
}