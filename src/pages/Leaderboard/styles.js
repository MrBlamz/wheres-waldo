import styled from 'styled-components';
import DefaultButton from '../../components/Button';

export const Container = styled.div`
  padding: 3rem 8rem;
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
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;
