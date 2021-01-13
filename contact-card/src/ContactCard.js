import React, {Component} from 'react';

class ContactCard extends React.Component {
    constructor(props) {
        super(props);
        // Enter dummy text 
        this.state = {name: "Enter Your Name Here",
                      mobileNumb: "Enter Your Mobile Number",
                      workNumb: "Enter Your Work Number",
                      email: "Enter Your Email"
                    };
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="nameInput" placeholder={this.state.name} /> <br/>
                <input type="number" id="mobileNumbInput" placeholder={this.state.mobileNumb} /> <br/>
                <input type="number" id="workNumbInput" placeholder={this.state.workNumb} /> <br/>
                <input type="email" id="emailInput" placeholder={this.state.email} /> <br/>
                <input type="submit" />
            </form>
        )
    };
}

export default ContactCard;
