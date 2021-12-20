import styled from 'styled-components';

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
  font-size: 1em;
  margin-top: 40px;
`;

// Original code from https://codepen.io/fabiowallner/pen/YOyJbJ
