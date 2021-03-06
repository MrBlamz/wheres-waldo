import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Avatar = styled.img`
  width: 30px;
  height: 100%;
`;

export const Name = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`;
