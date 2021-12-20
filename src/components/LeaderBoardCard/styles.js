import styled, { css } from 'styled-components';
import { media } from '../../theme';
import DefaultSpacer from '../Spacer';
import DefaultButton from '../Button';

const typographyStyles = css`
  font-size: 1rem;
  font-weight: 600;

  ${media.greaterThan('sm')`
    font-size: 1.5rem;
  `};

  ${media.greaterThan('lg')`
    font-size: 2rem;
  `};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1rem;

  ${media.greaterThan('sm')`
   padding: 2rem;
  `};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.25;
`;

export const BlackText = styled.p`
  ${typographyStyles}
`;

export const RedText = styled.p`
  ${typographyStyles}
  color: ${(props) => props.theme.primary};
`;

export const Spacer = styled(DefaultSpacer)`
  margin: 0.2vh;
`;

export const Button = styled(DefaultButton)`
  padding: 1rem;

  ${media.greaterThan('sm')`
    font-size: 1.1rem;
  `};
`;
