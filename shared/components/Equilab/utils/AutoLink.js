import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

/* eslint-disable jsx-a11y/anchor-has-content */
const AutoLink = props =>
  (/^https?:\/\/|^\/\//i.test(props.to) ? <a href={props.to} {...props} /> : <Link {...props} />);

AutoLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default AutoLink;
