import React from 'react';
import { shallow } from 'enzyme';
import GridContainer from '../GridContainer'

describe('GridContainer', () => {
  
  it('should render some html', () => {
    const component = shallow(<GridContainer />);
    const html = component.html();
    expect(html.length).toBeGreaterThan(0);
  });

  it('should render three content when three elements are passed as children', () => {
    const component = shallow(
      <GridContainer>
        <div> Hello </div>
        <div> There </div>
        <div> World </div>
      </GridContainer>
    );
    const listElements = component.find('ContentElement');
    expect(listElements.length).toEqual(3);
  });


});

