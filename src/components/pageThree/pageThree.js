import React, { Component } from 'react';
import niceOne from '../../assets/nice_one.gif'
import './styles.css';

class PageThree extends Component {
    constructor(props) {
        super(props);       
    }

    // Renders the last page of the form
    render() {
        return (
            // if the visible props returns true, display header, if not display none
            <div className={`${this.props.visible === true ? "visible" : "notvisible"}`}> 
                <img src={niceOne} alt="loading..." />
                <div className="lastPageTextContainer">
                    Nice one! Please verify your email address, you should have received an email from us already!
                </div>
            </div>
        )
    }
}

export default PageThree;
