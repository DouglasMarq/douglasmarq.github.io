import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { routerReducer } from 'connected-next-router'

const rootReducers = combineReducers({
    router: routerReducer
});

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
        return nextState
    } else {
        return rootReducers(state, action)
    }
}


export default reducer;
