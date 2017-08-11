import { combineReducers, createStore, applyMiddleware} from 'redux';
import { listProducts } from './reducers/ProductReducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory'

export const history = createHistory();
export const middleware = routerMiddleware(history);
export let all = combineReducers({
    listProducts,
    routerReducer
});

export let store = createStore(
    all,
    applyMiddleware(middleware),
);
