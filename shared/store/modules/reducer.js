import { combineReducers } from 'redux';

import entities from './entities';
import settings from './settings';

const rootReducer = combineReducers({
  entities,
  settings,
});

export default rootReducer;
