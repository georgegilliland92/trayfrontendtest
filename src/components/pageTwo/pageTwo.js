import React, { Component } from 'react';
import InputTwo from '../inputTwo/inputTwo.js';
import './styles.css';

class pageTwo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);        
    }

    // Handles click event and sends user forwards or backwards 
    // a page depending on the button they clicked
    handleClick(e) {
        e.preventDefault();
        this.props.changePage(e.target.getAttribute("data-name"))
    }

    // Renders the second page of the forms input components using properties passed from the parent 
    render() {
        return (
            // if the visible props returns true, display header, if not display none
            <div className={`${this.props.visible === true ? "visible" : "notvisible"}`}> 
                <InputTwo label={"Receive updates about Tray.io product by email"} name={"communication_mainProduct"} 
                    type={"checkbox"} onChange={this.props.handleChange} value={this.props.obj.communication_mainProduct}/>
                <InputTwo label={"Receive communication by email for other products created by the Tray.io team"} 
                    name={"communication_allProducts"} type={"checkbox"} onChange={this.props.handleChange} 
                    value={this.props.obj.communication_allProducts}/>
                <div className="submitButtonContainerTwo">
                    <div onClick={this.handleClick}>
                        <div data-name="backwards" className="submitButton submitButtonBackwards">Go back</div>
                    </div>
                    <div onClick={this.handleClick}>
                        <div data-name="forwards" className="submitButton">Submit</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default pageTwo;
