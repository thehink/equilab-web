import reducer, * as actions from '../settings';

describe('actions', () => {
  it('should create an action to change language', () => {
    const payload = 'en';

    const expectedAction = {
      type: actions.changeLanguage.toString(),
      payload,
    };
    expect(actions.changeLanguage(payload)).toEqual(expectedAction);
  });
});

describe('settings reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      language: 'en',
    });
  });

  it('should handle CHANGE_LANGUAGE', () => {
    const payload = 'en';

    expect(
      reducer([], {
        type: actions.changeLanguage.toString(),
        payload,
      })
    ).toEqual({
      language: payload,
    });
  });
});
