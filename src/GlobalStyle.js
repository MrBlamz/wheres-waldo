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

`;

export default GlobalStyle;
