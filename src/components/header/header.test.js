import React from 'react';
import Header from './header';
import { shallow } from '../../enzyme';

it('renders an input component and finds it', () => {
    const wrapper = shallow(<Header title='User'/>);
    expect(wrapper.find('div').at(1).text()).toEqual("User");
});
