import React from 'react';
import PageOne from './pageOne';
import Input from '../input/input';
import { shallow } from '../../enzyme';

it('renders an input component and finds it', () => {
    let userObj = {
        "name": "George",
        "role": "Implementation Engineer",
        "email": "george@tray.io",
        "password": "George1234"
    }
    const wrapper = shallow(<PageOne userObj={userObj}/>);
    expect(wrapper.find(Input).at(0).prop("value")).toEqual("George");
});
