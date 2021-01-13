import React, {Component} from 'react';

class CreateContactCard extends React.Component {
    constructor(props) {
        super(props);
        // Enter dummy text 
        this.state = {
                      name: " ",
                      mobileNumb: 0,
                      workNumb: 0,
                      email: " ",
                      formSubmitted: false
                    };
    }
    
    handleChange = (event) => {
        event.preventDefault();   
        this.setState({[event.target.name] : event.target.value});
        console.log(this.state);
    }
    
    handleSubmit = (event) => {
        // Clear previous render
        // create a new component
        this.setState({formSubmitted:true});
    }
    
    render() {
        // Make a new contact card upon submission
        if(!this.state.formSubmitted) {
            return(
                <div className="form">
                    <h1>Create New Contact </h1>
                    <form onSubmit={this.handleSubmit}>
                        <input name='name' type="text" placeholder="Enter Your Name Here" onChange={this.handleChange} /> <br/>
                        <input name='mobileNumb' type="number" placeholder="Enter Your Mobile Number Here" onChange={this.handleChange} /> <br/>
                        <input name='workNumb' type="number" placeholder="Enter Your Work Number Here" onChange={this.handleChange} /> <br/>
                        <input name='email' type="email" placeholder="Enter Your Email Here" onChange={this.handleChange} /> <br/>
                        <input type="submit" />
                    </form>
                </div>
            );
        } else {
            return(
                <div className="contact">
                    <h3>{this.state.name}</h3>
                    <h3>{this.state.mobileNumb}</h3>
                    <h3>{this.state.workNumb}</h3>
                    <h3>{this.state.email}</h3>
                </div>
            );
        }
    };

    /*
    CreateContactCard.propTypes = {
            name: PropTypes.string.isRequired,
            mobileNumb: PropTypes.number.isRequired,
            workNumb: 
    }
    */
}

export default CreateContactCard;
