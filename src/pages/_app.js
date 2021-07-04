import '../styles/global.scss';
import '../styles/libs.scss';
import '../styles/_vars.css';

import {Provider} from 'react-redux';

import {useStore} from '../store';

const App = ({Component, pageProps}) => {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default App;
