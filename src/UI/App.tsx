import { FC } from 'react';
import { useDispatch, useSelector, connect} from 'react-redux';
import './App.css';
import { styled } from 'styled-components';
import { Container } from './page/container';

const AppStyled = styled.div`
height: 100dvh;
background-color: var(--color-black);
position: relative;
z-index: 1;
.balls{
  .ball{
    position: absolute;
    z-index: 2;
    border-radius: 50%;
  }
  .ball_1{
    width: 960px;
    height: 960px;
    top: -300px;
    left: -200px;
    background-color: var(--color-red);
  }
  .ball_2{
    width: 720px;
    height: 720px;
    right: -140px;
    bottom: -240px;
    background-color: var(--color-dark-gray);
  }
  .ball_3{
    width: 240px;
    height: 240px;
    left: 60px;
    bottom: -120px;
    background-color: var(--color-light-gray);
  }
  .ball_4{
    width: 200px;
    height: 200px;
    top: 100px;
    right: 50px;
    background-color: var(--color-light-gray);
  }
  .ball_5{
    width: 80px;
    height: 80px;
    top: 310px;
    right: 25px;
    background-color: var(--color-gray);
  }
  .ball_6{
    width: 20px;
    height: 20px;
    top: 40px;
    right: 140px;
    background-color: var(--color-red);
  }
  .ball_7{
    width: 40px;
    height: 40px;
    bottom: 120px;
    left: 40px;
    background-color: var(--color-gray);
  }
}
.figma{
  position: absolute;
  z-index: 4;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  .logo{
    transition: all 1s cubic-bezier(.06,.68,.96,.48);
  }
  .title{
    font-size: 24px;
    font-weight: 700;
    color: var(--color-white);
  }
  &:hover .logo{
    transform: rotate(360deg);
  }
}
`
export const App:FC =()=>{
  return (
    <AppStyled>
      <ul className="balls">
        <li className="ball ball_1"></li>
        <li className="ball ball_2"></li>
        <li className="ball ball_3"></li>
        <li className="ball ball_4"></li>
        <li className="ball ball_5"></li>
        <li className="ball ball_6"></li>
        <li className="ball ball_7"></li>
      </ul>
      <a className="figma" href='https://www.figma.com/community/file/828904636600001452' target='_blank'>
        <svg className='logo' width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50Z" fill="#F8F8F8"/>
          <path d="M39.9967 79.9996C45.5196 79.9996 49.9967 75.5225 49.9967 69.9996V59.9996H39.9967C34.4738 59.9996 29.9967 64.4769 29.9967 69.9996C29.9967 75.5225 34.4738 79.9996 39.9967 79.9996Z" fill="#FF4656"/>
          <path d="M29.9967 50.0004C29.9967 44.4774 34.4738 40.0004 39.9967 40.0004H49.9967V60.0004H39.9967C34.4738 60.0004 29.9967 55.5231 29.9967 50.0004Z" fill="#FF4656"/>
          <path d="M29.9967 29.9992C29.9967 24.4763 34.4738 19.9991 39.9967 19.9991H49.9967V39.9992H39.9967C34.4738 39.9992 29.9967 35.5219 29.9967 29.9992Z" fill="#FF4656"/>
          <path d="M50 19.9991H60C65.5229 19.9991 70 24.4763 70 29.9992C70 35.5219 65.5229 39.9992 60 39.9992H50V19.9991Z" fill="#FF4656"/>
          <path d="M70 50.0004C70 55.5231 65.5229 60.0004 60 60.0004C54.4771 60.0004 50 55.5231 50 50.0004C50 44.4774 54.4771 40.0004 60 40.0004C65.5229 40.0004 70 44.4774 70 50.0004Z" fill="#FF4656"/>
        </svg>
        <span className='title'>Free file</span>
      </a>
      <Container/>
    </AppStyled>
  );
}

