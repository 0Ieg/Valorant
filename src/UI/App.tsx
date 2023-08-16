import { FC } from 'react';
import { useDispatch, useSelector, connect} from 'react-redux';
import './App.css';
import { styled } from 'styled-components';

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
  .ball-1{
    width: 960px;
    height: 960px;
    top: -300px;
    left: -200px;
    background-color: var(--color-red);
  }
  .ball-2{
    width: 240px;
    height: 240px;
    left: 60px;
    bottom: -120px;
    background-color: var(--color-gray);
  }
}
`
export const App:FC =()=>{
  return (
    <AppStyled>
      <ul className="balls">
        <li className="ball ball-1"></li>
        <li className="ball ball-2"></li>
        <li className="ball ball-3"></li>
        <li className="ball ball-4"></li>
        <li className="ball ball-5"></li>
        <li className="ball ball-6"></li>
        <li className="ball ball-7"></li>
        <li className="ball ball-8"></li>
      </ul>
    </AppStyled>
  );
}

