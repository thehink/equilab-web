import merge from 'lodash/merge';

const initialState = {
  users: {},
};

export default (state = initialState, action) => {
  if (action.payload && action.payload.entities) {
    return merge({}, state, action.payload.entities);
  }

  return state;
};
