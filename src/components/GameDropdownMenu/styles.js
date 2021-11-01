import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: fit-content;
`;
