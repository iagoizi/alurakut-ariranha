import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AlurakutStyles } from '../src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS (Necolas Reset CSS <3) */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #202024;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AlurakutStyles}
`;

const theme = {
  colors: {
    background: '#121214',
    green: '#04d361',
    red: '#e83f5b',
    orange: '#fd951f',
    yellow: '#f7df1e',
    primary: '#8257e6',
    primaryHover: '#9466ff',
    secondary: '#e1e1e6',
    text: '#a8a8b3',
    textEmphasis: 'rgba(255,255,255,87%)',
    support: '#737380',
    shape: '#202024',
    shapeHover: '#29292e',
    shape2: '#311377',
    icons: '#41414d',
    borders: '#323238',
    black: '#0d0d0f',
    white: '#fff',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
