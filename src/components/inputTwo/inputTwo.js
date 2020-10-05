import React, { Component } from 'react';
import './styles.css';

class InputTwo extends Component {
    constructor(props) {
        super(props);
    }

    // Renders the forms checkbox input fields using properties passed from the parent 
    render() {
        return (
            <div className="inputTwoContainer">
                <input name={this.props.name} type={this.props.type} onChange={this.props.onChange}></input>
                <div className="inputTwoLabelContainer">
                    {this.props.label}
                </div> 
            </div>
        )
    }
}

export default InputTwo;
