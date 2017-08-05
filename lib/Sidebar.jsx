import React from 'react';
import GridContainer from './GridContainer';

const defaultStyles = {
  overflow: 'scroll'
};

const styles = (obj) => Object.apply({}, defaultStyles, obj);

function Sidebar(props) {
  return (
    <GridContainer
      style={styles(props.style)}
      columns={1}
    >
      { props.children }
    </GridContainer>
  );
}

export default Sidebar;
