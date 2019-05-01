import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('<Header />', () => {
  it('Render Header is not empty', () => {
    const wrapper = shallow(<Header toggle={() => {}} isOpen={false} />);
    // console.log(wrapper.debug(), 'debug');
    expect(wrapper.isEmptyRender()).toEqual(false);
  });
});
