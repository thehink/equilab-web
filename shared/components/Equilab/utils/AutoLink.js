import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const AutoLink = props =>
  (/^https?:\/\/|^\/\//i.test(props.to) ? (
    <a href={props.to} {...props}>
      {props.children}
    </a>
  ) : (
    <Link {...props}>{props.children}</Link>
  ));

AutoLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default AutoLink;
