import React from 'react';
import { NavLink } from 'reactstrap';
import { Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import ProfileTabs from '../ProfileTabs';

describe('<ProfileTabs />', () => {
  it('Render ProfileTabs is not empty', () => {
    const username = 'test';

    const wrapper = shallow(<ProfileTabs username={username} />);
    // console.log(wrapper.debug(), 'debug');
    expect(wrapper.isEmptyRender()).toEqual(false);
    expect(wrapper.find(NavLink)).toHaveLength(3);
    expect(wrapper.find(Route)).toHaveLength(3);
  });
});
