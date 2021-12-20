import styled from 'styled-components';
import { media } from '../../theme';
import DefaultSpacer from '../../components/Spacer';

export const Container = styled.div`
  padding: 1rem;

  ${media.greaterThan('sm')`
    padding: 2rem;
  `};

  ${media.greaterThan('md')`
    padding: 2rem 3rem;
  `}

  ${media.greaterThan('lg')`
    padding: 3rem 5rem;
  `}

  ${media.greaterThan('xl')`
    padding: 3rem 10rem;
  `}
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  ${media.greaterThan('lg')`
    grid-template-columns: repeat(2, 1fr)
  `}

  ${media.greaterThan('xl')`
    grid-template-columns: repeat(3, 1fr)
  `}
`;

export const Spacer = styled(DefaultSpacer)`
  margin: 1rem;

  ${media.greaterThan('sm')`
    margin-top: 2rem;
  `};

  ${media.greaterThan('lg')`
    margin-top: 3rem;
  `}
`;
