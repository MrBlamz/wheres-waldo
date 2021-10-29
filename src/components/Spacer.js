import styled from 'styled-components';

const Spacer = styled.div`
  width: 0;
  height: 0;
  margin: ${(props) => (props.margin ? props.margin : null)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : null)};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : null)};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : null)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : null)};
`;

export default Spacer;
