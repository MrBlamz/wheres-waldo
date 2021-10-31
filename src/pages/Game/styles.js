import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 8rem;
`;

export const Image = styled.img`
  width: 100%;
  cursor: pointer;
  border-radius: ${(props) => props.theme.borderRadius};
`;
