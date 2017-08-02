import React from 'react';

const defaultStyles = {
  width: '25%'
};

const styles = function(opts = {}) {
  return Object.assign({}, defaultStyles, opts);
}

function ContentElement(props) {
  return (
    <li styles={ styles(props.styles) }> { props.content } </li>
  );
}

export default ContentElement;
