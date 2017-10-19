
//*************************************************************
// Author: Christian Jurt
// File: Main.js - This is the main (JSX) page.
// Description: An App that catelogs your contacts.
// Date: Oct 16, 2017
// Version: 0.0.1
//*************************************************************

'use strict';

import React from "react"

class ContactList extends React.Component {
    
    render(){
        
        
        
        return ( 
             <div id=“componentId”>Hello World</div>
        )
    }
    
    
}


ReactDOM.render(<ContactList />, document.getElementById("react-app"));