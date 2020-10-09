import React from 'react';
import PageThreeImage from '../../assets/nice_one.gif'
import './styles.css';

const PageThree = ( {active} ) => {
    return (
        // if the visible props returns true, display header, if not display none
        <div className={`${active === true ? "active" : "inactive"}`}> 
            <img src={PageThreeImage} alt="loading..." />
            <div className="lastPageTextContainer">
                Nice one! Please verify your email address, you should have received an email from us already!
            </div>
        </div>
    )
};

export default PageThree;
