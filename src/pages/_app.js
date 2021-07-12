import '../styles/global.scss';
import '../styles/libs.scss';
import '../styles/_vars.css';

import Head from 'next/head';
import { Provider } from 'react-redux';

import { useStore } from '../store';
import GlobalStyles from '../style/global-styles';

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <title>Title here</title>
      </Head>
      <GlobalStyles />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
