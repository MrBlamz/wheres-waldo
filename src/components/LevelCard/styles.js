import styled from 'styled-components';
import { media } from '../../theme';

export const Container = styled.div`
  border: 1px solid ${(props) => props.theme.tertiary};
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? props.theme.primary : 'none'};
  color: ${(props) => (props.selected ? '#fff' : '#000')};

  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.1);
  }
`;

export const ImageContainer = styled.div`
  height: 10.938rem;

  ${media.greaterThan('sm')`
  height: 15.5rem;
`};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  ${media.greaterThan('sm')`
    padding: 0.8rem 1rem;
  `};
`;

export const Level = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;

  ${media.greaterThan('sm')`
    font-size: 1.1rem;
  `};
`;

export const AvatarsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 1.2rem;
  height: 100%;
  margin: 0 5px;

  ${media.greaterThan('sm')`
    width: 1.3rem;
  `};
`;
