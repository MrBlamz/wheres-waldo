import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    font-family: 'Poppins', sans-serif;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
}

// Scrollbar Styles
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: #F5F5F5;
}

::-webkit-scrollbar {
  width: 0.8rem;
  height: 0.8rem;
  background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb {
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: ${(props) => props.theme.primary};
}

`;

export default GlobalStyle;
