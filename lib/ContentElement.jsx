import React from 'react';
import PropTypes from 'prop-types';
import Util from './utils';

const defaultStyles = {
};

const styles = function(opts = {}) {
  const derivedStyles = {
    width: Util.stringifiedWidth(opts.columns)
  }
  return Object.assign({}, defaultStyles, derivedStyles);
}

function ContentElement(props) {
  return (
    <li style={ styles(props) }> { props.content } </li>
  );
}

ContentElement.defaultProps = {
  columns: 5,
}

ContentElement.propTypes = {
  columns: PropTypes.number
}

export default ContentElement;
