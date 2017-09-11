import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import api from './middleware/api';

import rootReducer from './modules/reducer';

export default (initialState) => {
  const enhancer = compose(applyMiddleware(thunk));

  const store = createStore(rootReducer, initialState, enhancer);

  return store;
};
