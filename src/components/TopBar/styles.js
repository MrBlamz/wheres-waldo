import styled, { css } from 'styled-components';

const typographyStyles = css`
  font-size: 2rem;
  font-weight: 600;
`;

export const Container = styled.header`
  background-color: ${(props) => props.theme.background};
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 100%;
`;

export const RedTitle = styled.h1`
  ${typographyStyles};
  color: ${(props) => props.theme.primary};
`;

export const BlueTitle = styled.h1`
  ${typographyStyles};
  color: ${(props) => props.theme.secondary};
`;
