import { FC } from 'react'
import { styled } from 'styled-components'
import { Header } from './header'
import { Main } from './main'
import { Footer } from './footer'

const PageStyled = styled.div`
width: 100%;
height: 100%;
border-radius: 25px;
background-color: white;
`
export const Page:FC = ()=>{
  return(
    <PageStyled>
      <Header/>
      <Main/>
      <Footer/>
    </PageStyled>
  )
}