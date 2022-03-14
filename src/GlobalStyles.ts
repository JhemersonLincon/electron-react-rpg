import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding:0;margin: 0;
    box-sizing: border-box;
  }
  body {
    
    -webkit-app-region:drag;
  }
  button {
    -webkit-app-region:no-drag;
  }
`;