import styled from 'styled-components';
import { media } from '../../theme';
import Button from '../Button';
import DefaultSpacer from '../Spacer';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 2rem;

  ${media.greaterThan('md')`
    margin: 0 3rem;
  `}

  ${media.greaterThan('lg')`
    margin: 0 5rem;
  `}
`;

export const CharactersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HomeButton = styled(Button)`
  padding: 0.5rem;
`;

export const Spacer = styled(DefaultSpacer)`
  margin: 0.5rem;
`;
