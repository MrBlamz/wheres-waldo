import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  width: 100%;
  margin: 0 8rem;
  display: flex;
  justify-content: space-between;
`;

export const CharactersContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HomeButton = styled(Button)`
  padding: 1rem;
`;
