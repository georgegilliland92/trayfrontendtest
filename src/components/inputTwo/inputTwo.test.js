import React from 'react';
import InputTwo from './inputTwo';
import { shallow } from '../../enzyme';

it('renders an input component and finds it', () => {
    const wrapper = shallow(<InputTwo label='Receive updates about Tray.io product by email' 
        name="communication_mainProduct" type="checkbox"/>);
    expect(wrapper.find('input').at(0).prop('type')).toEqual("checkbox");
});
