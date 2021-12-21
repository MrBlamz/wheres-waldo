import styled from 'styled-components';
import { media } from '../../theme';
import DefaultButton from '../../components/Button';

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

export const Header = styled.header`
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

export const ButtonsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
`;

export const Button = styled(DefaultButton)`
  padding: 1rem;
`;

export const LevelCardsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  padding: 0.2rem 0;
  white-space: nowrap;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;

  ${media.greaterThan('md')`
    gap: 1rem;
    padding: 0.35rem 0;
  `}

  div {
    min-width: 100%;
    float: none;

    ${media.greaterThan('md')`
      min-width: calc(50% - 0.5rem );
    `}

    ${media.greaterThan('lg')`
      min-width: calc(33.3% - 0.65rem );
    `}

    ${media.greaterThan('xl')`
      min-width: calc(25% - 0.75rem );
    `}
  }
`;
