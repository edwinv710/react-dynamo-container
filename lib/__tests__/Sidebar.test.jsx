import React from 'react';
import Sidebar from '../Sidebar';
import { shallow } from 'enzyme';

describe('Sidebar', () => {
  it('should display html', () => {
    const component = shallow(<Sidebar />);
    expect(component.html().length).toBeGreaterThan(0);
  });
});
