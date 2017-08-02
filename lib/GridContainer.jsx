import React from 'react';
import ContentElement from './ContentElement';
import Util from './utils';

const defaultStyles = {
};

const defaultContentOptions = {
  type: 'wall',
  cols: 4
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
      <ul>
        { 
          contentElements(this.props.children, {
            cols: 4,
            type: 'wall'
          }) 
        }
      </ul>
    );
  }
}

export default GridContainer;
