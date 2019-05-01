import React from 'react';
import { shallow } from 'enzyme';
import Follower from '../Follower';

describe('<Follower />', () => {
  it('Render Follower is not empty', () => {
    const wrapper = shallow(<Follower follower={{ name: 'name' }} />);
    // console.log(wrapper.debug(), 'debug');
    expect(wrapper.isEmptyRender()).toEqual(false);
  });
});
