import { applyMiddleware, createStore} from 'redux'
import reducers from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { routerMiddleware } from 'react-router-redux';

export default function (history, initialState) {
  const middleware = applyMiddleware(
    promise(),
    thunk,
    logger(),
    routerMiddleware(history)
  );

  const store = createStore(reducers, initialState, middleware);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
