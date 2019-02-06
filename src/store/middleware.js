import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, createLogger()];
const enhancer = composeWithDevTools(
    {},
)(applyMiddleware(...middlewares));

export {
    enhancer,
    sagaMiddleware
};
