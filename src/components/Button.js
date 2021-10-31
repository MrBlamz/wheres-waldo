import styled, { css } from 'styled-components';

const primary = css`
  background-color: ${(props) => props.theme.primary};
`;

const secondary = css`
  background-color: ${(props) => props.theme.secondary};
`;

const Button = styled.button`
  ${(props) => props.primary && primary};
  ${(props) => props.secondary && secondary};
  padding: 0 1rem;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }
`;

export default Button;
