import React from 'react';
import Input from '../input/input.js';
import './styles.css';

const PageOne = ( {active, userObj, changePage, errors, handleChange} ) => {
    function handleClick(e) {
        e.preventDefault();
        let errorMessages = []
        let emailRegex = /\S+@\S+\.\S+/;
        let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{9,}$/

        // Checks if valid email using regex
        if (emailRegex.test(userObj.user.email) === false) {
            errorMessages.push("Please type in a valid email");
        }
        // Checks if name is empty
        if (userObj.user.name === "") {
            errorMessages.push("Please type in your name");
        }
        // Checks if password is valid
        if (passwordRegex.test(userObj.user.password) === false) {
            errorMessages.push("Please type in a valid password");
        }
        // If no errors, change page
        if (errorMessages.length === 0) {
            changePage(e.target.getAttribute("data-name"))
        } else {
            console.log(errorMessages)
            // If errors, populate errors 
            errors(errorMessages);
        }    
    }
    return (
        // if the visible props returns true, display header, if not display none
        <div className={`${active === true ? "inputsContainer active" : "inputsContainer inactive"}`}> 
            <Input id="name" label={"Name"} name={"name"} type={"text"} onChange={handleChange} 
                value={userObj.name} required={true}/>
            <Input id="role" label={"Role"} name={"role"} type={"text"} onChange={handleChange} 
                value={userObj.role} required={false}/>
            <Input id="email" label={"Email"} name={"email"} type={"email"} onChange={handleChange} 
                value={userObj.email} required={true}/>
            <Input id="password" label={"Password"} name={"password"} type={"password"} onChange={handleChange} 
                value={userObj.password} required={true}/>
            <div id="pageOneSubmitContainer" className="submitButtonContainer" onClick={handleClick}>
                <div data-name="forwards" id="pageOneSubmit" className="submitButton">Next</div>
            </div>
        </div>
    )
};

export default PageOne;
