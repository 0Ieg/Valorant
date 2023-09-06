import { FC } from 'react'
import { styled } from 'styled-components'
import { Header } from './header'
import { Main } from './main'

const PageStyled = styled.div`
width: 100%;
height: 100%;
border-radius: 25px;
display: flex;
flex-direction: column;
box-shadow: 0 0 10px black;
`
export const Page:FC = ()=>{
  return(
    <PageStyled>
      <Header/>
      <Main/>
    </PageStyled>
  )
}