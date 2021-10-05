import { applyMiddleware, createStore, compose } from 'redux';
import { reducers } from './reducers';

const middlewareList = [];

if (process.env.NODE_ENV !== 'production') {
    const  createLogger = require('redux-logger').createLogger;

    middlewareList.push(
        createLogger({
            duration: true,
            collapsed: (getState, action, logEntry) => !logEntry.error,
            // eslint-disable-next-line no-console
            errorTransformer: error => console.error(error)
        })
    );
}

export const middleware = compose(
    applyMiddleware(...middlewareList)
);

export const store = createStore(reducers, middleware);
