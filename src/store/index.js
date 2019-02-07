/* eslint global-require: 0 */
import { createStore } from 'redux';
import { END } from 'redux-saga';
import { createBrowserHistory } from 'history'
import rootSaga from '../sagas/';
import createRootReducer from '../reducers/';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router'

const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, createLogger(), routerMiddleware(history)];
const enhancer = composeWithDevTools(
    {},
)(applyMiddleware(...middlewares));


const configureStore = (initialState) => {
    const store = createStore(createRootReducer(history), initialState, enhancer);
    if (module.hot) {
        module.hot.accept(() => {
            store.replaceReducer(require('../reducers/').default);
        });
    }
    sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);
    return store;
};

export default configureStore;
