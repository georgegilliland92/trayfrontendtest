import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});