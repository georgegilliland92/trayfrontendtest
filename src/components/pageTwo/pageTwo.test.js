import React from 'react';
import PageTwo from './pageTwo';
import Input from '../inputTwo/inputTwo';
import { shallow } from '../../enzyme';

it('renders an input component and finds it', () => {
    let userObj = {
        "communication_mainProduct": true
    }
    const wrapper = shallow(<PageTwo userObj={userObj}/>);
    expect(wrapper.find(Input).at(0).prop("value")).toEqual(true);
});
