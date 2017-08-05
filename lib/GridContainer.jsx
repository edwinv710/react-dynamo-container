import React from 'react';
import PropTypes from 'prop-types';
import ContentElement from './ContentElement';
import Util from './utils';

const defaultStyles = {
};

const styles = (style) => Object.apply({}, defaultStyles, style);

const defaultContentOptions = {
  type: 'grid',
  columns: 4
}

const contentElements = function (contents = [], opts = {}) {
  const options = Object.assign({}, defaultContentOptions, opts);
  return contents.map((content) => <ContentElement content={content} {...options}  />);
}

class GridContainer extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ul style={styles(props.style)}>
        { 
          contentElements(this.props.children, {
            columns: 4,
            type: 'grid'
          }) 
        }
      </ul>
    );
  }
}

GridContainer.defaultProps = {
  columns: 4,
  type: 'grid',
};

GridContainer.propTypes = {
  columns: PropTypes.number,
  type: PropTypes.string
};

export default GridContainer;
