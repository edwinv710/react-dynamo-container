import React from 'react';
import { shallow } from 'enzyme';
import ContentElement from '../ContentElement';

describe('ContentElement', () => {

  it('should render some html', () => {
    const component = shallow(<ContentElement />);
    expect(component.html().length).toBeGreaterThan(0);
  });

  it('should render the element passed', () => {
    const content = (<div className='test-box'></div>);
    const component = shallow(<ContentElement content={ content } />);

    const renderedContent = component.find('.test-box');
    expect(renderedContent.length).toBe(1);
  });

});
