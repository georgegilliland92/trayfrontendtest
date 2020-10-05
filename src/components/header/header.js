import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    // Renders the forms headers components 
    render() {
        return (
            // if the visible props returns true, display header, if not display none
            <div className={`${this.props.visible === true ? "innerHeaderContainer active" : "innerHeaderContainer"}`}> 
                <div>
                    {this.props.title}
                </div>
            </div>
        )
    }
}

export default Header;
