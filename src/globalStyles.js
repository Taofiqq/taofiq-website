import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

     h2, h3, h4, h5, h6 {
        display: inline-block;
        font-family: 'Work Sans', sans-serif;
    }

    body {
        margin: 0;
        padding:0;
        overflow-x: hidden;
        font-family: 'Work Sans', sans-serif;
    }
`;

export default GlobalStyle;
