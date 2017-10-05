import { createAction, handleActions } from 'redux-actions';

export const changeLanguage = createAction('CHANGE_LANGUAGE', props => props);

const initialState = {
  language: 'en',
};

export default handleActions(
  {
    [changeLanguage]: (state, { payload }) => ({
      ...state,
      language: payload,
    }),
  },
  initialState
);
