import React from 'react';
import InputTwo from '../inputTwo/inputTwo.js';
import './styles.css';

const PageTwo = ( {active, handleChange, userObj, changePage} ) => {
    return (
        // if the visible props returns true, display header, if not display none
        <div className={`${active === true ? "active" : "inactive"}`}> 
            <InputTwo label={"Receive updates about Tray.io product by email"} name={"communication_mainProduct"} 
                type={"checkbox"} onChange={handleChange} value={userObj.communication_mainProduct}/>
            <InputTwo label={"Receive communication by email for other products created by the Tray.io team"} 
                name={"communication_allProducts"} type={"checkbox"} onChange={handleChange} 
                value={userObj.communication_allProducts}/>
            <div className="submitButtonContainerTwo">
                <div onClick={() => changePage("backwards")}>
                    <div data-name="backwards" className="submitButton submitButtonBackwards">Go back</div>
                </div>
                <div onClick={() => changePage("forwards")}>
                    <div data-name="forwards" className="submitButton">Submit</div>
                </div>
            </div>
        </div>
    )
};

export default PageTwo;
