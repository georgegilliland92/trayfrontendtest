import React, { Component } from 'react';
import Input from '../input/input.js';
import './styles.css';

class pageOne extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    // Handles click event and performs validations
    handleClick(e) {
        e.preventDefault();

        let errors = []
        let emailRegex = /\S+@\S+\.\S+/;
        let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{9,}$/
        // Checks if valid email using regex
        if (emailRegex.test(this.props.obj.email) === false) {
            errors.push("Please type in a valid email");
        }
        // Checks if name is empty
        if (this.props.obj.name === "") {
            errors.push("Please type in your name");
        }
        // Checks if password is valid
        if (passwordRegex.test(this.props.obj.password) === false) {
            errors.push("Please type in a valid password");
        }
        // If no errors, change page
        if (errors.length === 0) {
            this.props.changePage(e.target.getAttribute("data-name"))
        } else {
            // If errors, populate errors 
            this.props.errors(errors);
        }
    }

    //  Renders the first page of the forms input components using properties passed from the parent 
    render() {
        return (
            // if the visible props returns true, display header, if not display none
            <div className={`${this.props.visible === true ? "inputsContainer visible" : "inputsContainer notvisible"}`}> 
                <Input id="name" label={"Name"} name={"name"} type={"text"} onChange={this.props.handleChange} value={this.props.obj.name} required={true}/>
                <Input id="role" label={"Role"} name={"role"} type={"text"} onChange={this.props.handleChange} value={this.props.obj.role} required={false}/>
                <Input id="email" label={"Email"} name={"email"} type={"email"} onChange={this.props.handleChange} value={this.props.obj.email} required={true}/>
                <Input id="password" label={"Password"} name={"password"} type={"password"} onChange={this.props.handleChange} value={this.props.obj.password} required={true}/>
                <div id="pageOneSubmitContainer" className="submitButtonContainer" onClick={this.handleClick}>
                    <div data-name="forwards" id="pageOneSubmit" className="submitButton">Next</div>
                </div>
            </div>
        )
    }
}

export default pageOne;
