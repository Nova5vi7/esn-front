import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    font-size: 12px;
    height: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    font-size: 1.5rem;
    line-height: 1;
    font-family: 'IBMPlexSans-Regular', sans-serif; 
    position: relative;
    margin: 0;
    color:  ${({ theme }) => theme.colors.bright};

    #__next {
      width: 100%;
      height: 100vh;
      display: flex;
    }
  }

  *,
  *::before,
  *::after {
    outline: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  }

  [type="search"] {
    appearance: initial;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    font-weight: normal;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    padding: 0;
 
    li {
      list-style: none;
    }
  }
  
  .container {
    max-width: 1290px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  
  form {
    @include displayFlex();
    flex-direction: column;
    align-items: center;
  }
  
  .react-tel-input .country-list .country {
    color:  ${({ theme }) => theme.colors.muted};
  }

`;

export default GlobalStyles;
