/* eslint global-require: 0 */
import { createStore } from 'redux';
import { END } from 'redux-saga';
import {
    enhancer,
    sagaMiddleware
} from './middleware';
import rootSaga from '../sagas/';
import reducer from '../reducers/';

const configureStore = (initialState) => {
    const store = createStore(reducer, initialState, enhancer);
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
