import React from 'react';
import { Link } from 'react-router-dom';

const RouterLink = props => (
  <Link to={props.to} onClick={props.hideMenu} style={props.style}>
    {props.children}
  </Link>
);

export default RouterLink;
