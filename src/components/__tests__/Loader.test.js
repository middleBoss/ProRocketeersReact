import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../Loader';

describe('<Loader />', () => {
  it('Render Loader is not empty', () => {
    const wrapper = shallow(<Loader />);
    // console.log(wrapper.debug(), 'debug');
    expect(wrapper.isEmptyRender()).toEqual(false);
  });
});
