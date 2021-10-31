import styled from 'styled-components';

const TopBar = styled.header`
  background-color: ${(props) => props.theme.background};
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TopBar;
