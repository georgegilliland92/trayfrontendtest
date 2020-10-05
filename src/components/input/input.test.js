import React from 'react';
import Input from './input';
import { shallow } from '../../enzyme';

it('renders an input component and finds it', () => {
    const wrapper = shallow(<Input label='Name' name="name" type="text"/>);
    expect(wrapper.find('input').at(0).prop('name')).toEqual("name");
});
