import { FC } from 'react'
import { styled } from 'styled-components'
import { Page } from './page'
const ContainerStyled = styled.div`
max-width: 1840px;
height: 100%;
margin: 0 auto;
padding: 90px 40px 40px;
position: relative;
z-index: 3;
`
export const Container:FC = ()=>{
  return(
    <ContainerStyled>
      <Page/>
    </ContainerStyled>
  )
}