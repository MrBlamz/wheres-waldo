import styled, { css } from 'styled-components';
import { media } from '../../../theme';
import DefaultSpacer from '../../Spacer';

const noPointerEvents = css`
  pointer-events: none;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  padding: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.tertiary};
  }
`;

export const Avatar = styled.img`
  ${noPointerEvents}
  width: 25px;
  height: 25px;

  ${media.greaterThan('lg')`
  width: 30px;
  height: 30px;
  `}
`;

export const Name = styled.p`
  ${noPointerEvents}
  font-size: 1rem;

  ${media.greaterThan('lg')`
    font-size: 1.2rem;
  `}
`;

export const Spacer = styled(DefaultSpacer)`
  margin: 0.3rem;
`;
