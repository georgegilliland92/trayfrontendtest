import React from 'react';
import './styles.css';

// Renders the forms checkbox input fields using properties passed from the parent 
const InputTwo = ({ label, name, type, onChange }) => {
    return (
        <div className="inputTwoContainer">
            <input name={name} type={type} onChange={onChange}></input>
            <div className="inputTwoLabelContainer">
                {label}
            </div> 
        </div>
    )
};

export default InputTwo;
