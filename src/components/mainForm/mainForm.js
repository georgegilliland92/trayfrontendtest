import React, { Component } from 'react';
import Header from '../header/header.js';
import PageOne from '../pageOne/pageOne.js';
import PageTwo from '../pageTwo/pageTwo.js';
import PageThree from '../pageThree/pageThree.js';
import './styles.css';

class MainForm extends Component {
    constructor(props) {
        super(props);
        // Sets the initial state for the forms logic and user object
        this.state = {
            "pageOne": true,
            "pageTwo": false,
            "pageThree": false,
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
        };
    }

    // Change page logic. Each page has a dedicated number, 
    // If the page number matches their respective page state
    // set the value to true, where others will be false.
    // We also check if we should be going forwards or 
    // backwards in the form
    changePage(val) {
        let page = this.state.page;
        if (val === "forwards") {
            page = page + 1
        }
        if (val === "backwards") {
            page = page - 1
        }
        this.setState({
            "pageOne": page === 1 ? true : false,
            "pageTwo": page === 2 ? true : false,
            "pageThree": page >= 3 ? true : false,
            "page": page,
            "errorMessages": []
        })
        if (page === 3) {
            console.log(this.state.user)
        }
    }

    // Handle input change events to update the apps state
    handleTextChange(event){
        const {name, value, checked, type} = event.target
        if (type === "checkbox") {
            this.setState(prevState => ({
                user: { ...prevState.user, [name]: checked}
            })); 
        } else {
            this.setState(prevState => ({
                user: { ...prevState.user, [name]: value}
            })); 
        }
    }

    // Handle error messages in the apps state
    handleErrors(error){
        this.setState({
            "errorMessages": errors
        })    
    }

    // Renders mainForm and child components
    // Line 87 renders error messages in the dom if there are any
    render() {
        const {pageOne, pageTwo, pageThree, errorMessages, user} = this.state;
      
        return (
            <div className="outerFormContainer"> 
                <div className="headerContainer">
                    <Header title={"User"} visible={pageOne}/>
                    <Header title={"Privacy"} visible={pageTwo}/>
                    <Header title={"Done"} visible={pageThree}/>
                </div>
                <div  className="innerFormContainer">
                    {errorMessages.length > 0 ?                                     
                        <div className="errorMessageContainer">
                            {errorMessages.map((error)=>{
                                return <div className="errorMessage">{error}</div>
                            })}
                        </div>
                    : null}
                    <form>
                        <PageOne visible={pageOne} changePage={this.changePage.bind(this)} 
                            handleChange={this.handleTextChange} obj={user} errors={this.handleErrors.bind(this)}/>
                        <PageTwo visible={pageTwo} changePage={this.changePage.bind(this)} 
                            handleChange={this.handleTextChange} obj={user}/>
                        <PageThree visible={pageThree} />
                    </form>
                </div>
            </div>
        )
    }
}

export default MainForm;
