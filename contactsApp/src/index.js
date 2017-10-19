import React from "react";
import ReactDOM from "react-dom";

//*************************************************************
// Author: Christian Jurt
// File: Main.js - This is the main (JSX) page.
// Description: An App that catelogs your contacts.
// Date: Oct 16, 2017
// Version: 0.0.1
//*************************************************************

'use strict';

const App = (props) => {

    return(
        <h1>
            {props.name} ({props.age})
        </h1>
       
    );
};

App.propTypes = {
    
    name: React.propTypes.string,
    age: React.propTypes.number
}

ReactDOM.render(
    <App name="Christian" age="35"/>, 
    document.getElementById("react-app")
);





