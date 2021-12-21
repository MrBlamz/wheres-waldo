import styled, { css } from 'styled-components';
import { media } from '../../theme';
import DefaultButton from '../Button';

const padding = css`
  padding: 1rem;

  ${media.greaterThan('md')`
    padding: 1.5rem;
  `}
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  overflow: hidden;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: #fff;
`;

export const Header = styled.div`
  ${padding};
  border-bottom: 1px solid #dddddd;
`;

export const HeaderText = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;

  ${media.greaterThan('lg')`
    font-size: 2rem;
  `}
`;

export const InputWrapper = styled.div`
  ${padding};
  border-bottom: 1px solid #dddddd;
`;

export const Text = styled.p`
  font-size: 1.1rem;

  ${media.greaterThan('lg')`
    font-size: 1.25rem;
  `}
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.5rem;

  ${media.greaterThan('lg')`
    font-size: 1rem;
  `}
`;

export const Input = styled.input`
  padding: 0.8rem;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid #dddddd;
  box-shadow: 0 0 3px rgba(33, 33, 33, 0.1);
  outline: none;
  font-size: 1.3rem;
  font-family: ${(props) => props.theme.fontFamily};

  &:focus {
    border: 1px solid ${(props) => props.theme.secondary};
  }

  ${media.greaterThan('lg')`
    font-size: 1.5rem;
  `}
`;

export const ButtonContainer = styled.div`
  ${padding};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled(DefaultButton)`
  padding: 1rem;

  ${media.greaterThan('lg')`
    font-size: 1.05rem;
  `}
`;

export const Error = styled.span`
  display: block;
  color: red;
  margin-top: 5px;

  ${media.greaterThan('lg')`
    font-size: 1.1rem;
  `}
`;
