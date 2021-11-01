import styled, { css } from 'styled-components';

const typographyStyles = css`
  font-size: 2rem;
  font-weight: 600;
`;

export const Image = styled.img`
  height: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

export const RedTitle = styled.h1`
  ${typographyStyles};
  color: ${(props) => props.theme.primary};
`;

export const BlueTitle = styled.h1`
  ${typographyStyles};
  color: ${(props) => props.theme.secondary};
`;
