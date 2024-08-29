import './app.css';
import '../styles/main.scss';
import '@fontsource/noto-serif';
import 'rodal/lib/rodal.css';
import {Provider, useStore} from "react-redux";
import { wrapper } from '../store';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


function myApp({ Component, ...rest }) {
    // const store = useStore((state) => state);
    const { store, props} = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

    return (
        <>
            <Provider store={store}>
                    <Component {...pageProps} />
            </Provider>
        </>
    )
}

export default myApp;
