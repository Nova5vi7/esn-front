import '../styles/libs.scss';
import '../styles/_vars.css';

import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { useStore } from '../store';
import GlobalStyles from '../style/global-styles';
import Fonts from '../style/fonts';
import Theme from '../style/theme';

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <title>Title here</title>
      </Head>
      <Fonts/>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />

        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
