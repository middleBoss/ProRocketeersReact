import React from 'react';
import { shallow } from 'enzyme';
import Repository from '../Repository';

describe('<Repository />', () => {
  it('Render Repository is not empty', () => {
    const wrapper = shallow(<Repository repository={{ data: 'data' }} />);
    // console.log(wrapper.debug(), 'debug');
    expect(wrapper.isEmptyRender()).toEqual(false);
  });
});
