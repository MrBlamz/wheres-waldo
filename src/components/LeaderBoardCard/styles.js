import styled, { css } from 'styled-components';

const typographyStyles = css`
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem;
  background-color: ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 4vh;
`;

export const BlackText = styled.p`
  ${typographyStyles}
`;

export const RedText = styled.p`
  ${typographyStyles}
  color: ${(props) => props.theme.primary};
`;
