import React, { Component } from 'react';
import './styles.css';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    // Renders the forms text input fields using properties passed from the parent 
    render() {
        return (
            <div className="inputContainer">
                <div className="inputLabelContainer">
                    {this.props.label}
                    {this.props.required ?                                     
                        <div className="required">
                            *
                        </div>
                    : null
                    }
                </div> 
                <input className="inputOne" name={this.props.name} type={this.props.type} onChange={this.props.onChange}></input>
            </div>
        )
    }
}

export default Input;
