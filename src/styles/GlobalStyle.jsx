import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }
  body {
    box-sizing: border-box;
  }

  //scroll bar custom css
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    border-radius: 0.15rem;
    background: #f1f1f1;
    
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 0.15rem;
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
`;

export default GlobalStyle;
