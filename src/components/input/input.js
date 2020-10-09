import React from 'react';
import './styles.css';

// Renders the forms text input fields using properties passed from the parent 
const Input = ({ label, required, name, type, onChange }) => {
    return (
        <div className="inputContainer">
            <div className="inputLabelContainer">
                {label}
                {required ?                                     
                    <div className="required">
                        *
                    </div>
                : null
                }
            </div> 
            <input className="inputOne" name={name} type={type} onChange={onChange}></input>
        </div>
    )
};

export default Input;
