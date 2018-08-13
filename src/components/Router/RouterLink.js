import React from 'react';
import { Link } from 'react-router-native';

const RouterLink = props => (
  <Link to={props.to} onPress={props.hideMenu} style={props.style}>
    {props.children}
  </Link>
);

export default RouterLink;
