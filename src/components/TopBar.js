import styled from 'styled-components';

const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: ${(props) => props.theme.background};
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TopBar;
