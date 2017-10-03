/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow } from 'enzyme';

import FrontPage from '../FrontPage';

describe('<FrontPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<FrontPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
