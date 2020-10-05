import React, { Component} from "react";
import MainForm from './components/mainForm/mainForm.js';
import "./styles.css";

// Renders the mainform component into the app 
class App extends Component{
    render(){
        return(
            <div className="App">
                < MainForm />
            </div>
        );
    }
}

export default App;