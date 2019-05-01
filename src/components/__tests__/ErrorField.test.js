import React from 'react';
import { shallow } from 'enzyme';
import ErrorField from '../ErrorField';

describe('Test', () => {
  it('should render a ErrorField', () => {
    const wrapper = shallow(<ErrorField error={{ message: '111 228' }} />);
    // console.log(wrapper.debug(), 'debug');
    expect(wrapper.isEmptyRender()).toEqual(false);
  });
});
