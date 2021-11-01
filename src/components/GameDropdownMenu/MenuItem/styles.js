import styled, { css } from 'styled-components';

const noPointerEvents = css`
  pointer-events: none;
`;

export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 0.5rem;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }
`;

export const Avatar = styled.img`
  ${noPointerEvents}
  width: 25px;
  height: 25px;
`;

export const Name = styled.p`
  ${noPointerEvents}
  font-size: 1rem;
`;
