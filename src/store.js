import {createStore, applyMiddleware, combineReducers} from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import {createRouterMiddleware, initialRouterState, routerReducer} from 'connected-next-router'
import rootReducers from './reducers';
import {configureStore} from "@reduxjs/toolkit";

const reducer = combineReducers({
    router: routerReducer
});

const makeStore = () => {
    return configureStore({
        reducer,
        devTools: true,
        middleware: getDefaultMiddleware => [...getDefaultMiddleware()]
    })
}

// Export the wrapper & wrap the pages/_app.js with this wrapper only
export const wrapper = createWrapper(makeStore,{ debug: true });
