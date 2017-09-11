import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// import api from './middleware/api';

import rootReducer from './modules/reducer';

const IS_CLIENT = process.env.BUILD_FLAG_IS_CLIENT === 'true';
const IS_DEV = process.env.BUILD_FLAG_IS_DEV === 'true';

const composeEnhancers =
  typeof window === 'object' &&
  IS_CLIENT &&
  IS_DEV &&
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // eslint-disable-next-line
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        {
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }
      )
    : compose;

export default (initialState) => {
  const middleware = [thunk];

  if (IS_CLIENT && IS_DEV) {
    middleware.push(createLogger());
  }

  const enhancer = composeEnhancers(applyMiddleware(...middleware));

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/reducer', () =>
      store.replaceReducer(require('./modules/reducer').default)
    );
  }

  return store;
};
