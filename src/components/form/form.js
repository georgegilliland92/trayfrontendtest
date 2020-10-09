import React, { useState, useEffect } from 'react';
import Header from '../header/header.js';
import PageOne from '../pageOne/pageOne.js';
import PageTwo from '../pageTwo/pageTwo.js';
import PageThree from '../pageThree/pageThree.js';
import './styles.css';

const Form = () => {
    // Sets the initial state for the forms logic and user object
    const [form, setState] = useState({
        "page": 1,
        "user": {
            "name":  "",
            "role": "",
            "email": "",
            "password": "",
            "communication_mainProduct": false,
            "communication_allProducts": false,
        },
        "errorMessages": []
    });

    // Change page logic. Each page has a dedicated number, 
    // If the page number matches their respective page state
    // We also check if we should be going forwards or 
    // backwards in the form
    const handleChangePage = (val) => {
        const formObj = {...form};
        if (val === "forwards") {
            formObj.page = formObj.page + 1;
            formObj.errorMessages = []
            setState(formObj)
        }
        if (val === "backwards") {
            formObj.page = formObj.page - 1 ;
            setState(formObj)
        }
    }

    const consoleLogUserData = () => {
        if (form.page === 3) {
            console.log(form.user);
        };
    }

    // Call consoleLogUserData after each render
    useEffect(() => {
         consoleLogUserData()
    });

    // Handle input change events to update the apps state
    const handleInputChange = event => {
        const {name, value, checked, type} = event.target;
        const formObj = {...form};
        if (type === "checkbox") {
            formObj.user[name] = checked;
            setState(formObj)
        } else {
            formObj.user[name] = value;
            setState(formObj)
        }
    };

    // Handle error messages in the apps state
    function handleErrors(errors){
        const formObj = {...form};
        formObj.errorMessages = errors;
        setState(formObj)
    }

    // Renders mainForm and child components
    // Line 87 renders error messages in the dom if there are any
    return (
        <div className="outerFormContainer"> 
            <div className="headerContainer">
                <Header title={"User"} active={form.page === 1 ? true : false}/>
                <Header title={"Privacy"} active={form.page === 2 ? true : false}/>
                <Header title={"Done"} active={form.page === 3 ? true : false}/>
            </div>
            <div className="innerFormContainer">
                {form.errorMessages.length > 0 ?                                     
                    <div className="errorMessageContainer">
                        {form.errorMessages.map((error)=>{
                            return <div className="errorMessage">{error}</div>
                        })}
                    </div>
                : null}
                <form>
                    <PageOne active={form.page === 1 ? true : false} changePage={handleChangePage}  
                        handleChange={handleInputChange} userObj={form} errors={handleErrors} />
                    <PageTwo active={form.page === 2 ? true : false} changePage={handleChangePage} 
                        handleChange={handleInputChange} userObj={form}/>  
                    <PageThree active={form.page === 3 ? true : false} />                      
                </form>
            </div>
        </div>
    )
};

export default Form;
