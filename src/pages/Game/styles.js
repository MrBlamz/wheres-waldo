import styled from 'styled-components';
import { media } from '../../theme';

export const Container = styled.div`
  padding: 2rem;

  ${media.greaterThan('md')`
  padding: 2rem 3rem;
  `}

  ${media.greaterThan('lg')`
  padding: 3rem 5rem;
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadius};
`;
