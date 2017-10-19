import React from "react";
import ReactDOM from "react-dom";


//var a = () => console.log("Hello World");
//debugger;

//var b;

//a();


//*************************************************************
// Author: Christian Jurt
// File: Main.js - This is the main (JSX) page.
// Description: An App that catelogs your contacts.
// Date: Oct 16, 2017
// Version: 0.0.1
//*************************************************************

'use strict';

//const App = (props) => {
//
//    return(
//        <h1>
//            {props.name} ({props.age})
//        </h1>
//       
//    );
//};
//
//
//ReactDOM.render(
//    <App name="Christian" age="35"/>, 
//    document.getElementById("react-app")
//);



class ContactsApp extends React.Component {
     constructor() {
    super();
      
  }
    
  render() {
    return (
      <div className="container">
        
      </div>
    );
  } 
}


class ContactBox extends React.Component {

    render(){
       
    );
        

        //const myContacts = this._getContacts();
        return ( 
            <div className="contact-box">
            
            <h3>Contacts</h3>
            
            <div className="contact-list">
            <ul>
            {contactItem}
            </ul>
            
            </div>
            </div>
           
        )
    }
                                           
    )}
}


class ContactItem extends React.Component{
  render() {
    return(
      <li>
        <strong>{this.props.name}</strong> - {this.props.email}
      </li>
    );
  }
} 

  let contacts = [{
    "gender": "male",
    "name": {"title": "mr", "first": "daniel", "last": "williams"},
    "location": {"street": "6366 duke st", "city": "kingston", "state": "northwest territories", "postcode": 90447},
    "email": "daniel.williams@example.com",
    "dob": "1957-03-13 04:24:26",
    "phone": "955-142-0585",
    "cell": "689-368-5264",
    "id": 1001,
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/82.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/82.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/82.jpg"
    },
    "key": 1
}, {
    "gender": "male",
    "name": {"title": "mr", "first": "mason", "last": "lavoie"},
    "location": {"street": "7838 queen st", "city": "sandy lake", "state": "northwest territories", "postcode": 11887},
    "email": "mason.lavoie@example.com",
    "dob": "1979-09-14 07:40:46",
    "phone": "498-109-2176",
    "cell": "809-132-5817",
    "id": 1002,
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/37.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/37.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/37.jpg"
    },
    "key": 2
}];

ReactDOM.render(<ContactBox />, document.getElementById("react-app"));

//class App extends React.Component {
//    constructor(){
//        super();
//        
//    }
//    
//   render(props){ 
//   return(
//        <h1>
//            {props.headerMessage}
//        
//        </h1>
//    );  
//    
//    
//   }
//}


