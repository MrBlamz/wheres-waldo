import styled from 'styled-components';
import { media } from '../../theme';

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

export const Device = styled.div`
  height: 50px;
  width: 100px;
  border: 3px solid white;
  border-radius: 10px;
  animation: rotate 1.5s ease-in-out infinite alternate;

  ${media.greaterThan('md')`
    height: 150px;
    width: 200px;
  `}

  ${media.greaterThan('lg')`
    height: 200px;
    width: 250px;
  `}

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-90deg);
    }
    100% {
      transform: rotate(-90deg);
    }
  }
`;

export const Message = styled.div`
  color: white;
  font-size: 1rem;
  margin-top: 50px;

  ${media.greaterThan('md')`
    font-size: 1.2rem;
  `}

  ${media.greaterThan('lg')`
    font-size: 1.3rem;
    margin-top: 60px;
  `}
`;

// Original code from https://codepen.io/fabiowallner/pen/YOyJbJ
