import React from 'react';
import './styles.css';

const Header = ({ active, title }) => {
    return (
        // if the visible props returns true, display header, if not display none
        <div className={`${active === true ? "innerHeaderContainer activeHeader" : "innerHeaderContainer"}`}> 
            <div>
                {title}
            </div>
        </div>
    )
};

export default Header;
