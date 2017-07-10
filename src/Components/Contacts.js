import React, { Component } from 'react';
import Items from './Items';

var contacts = [
    { firstName : "Moira",lastName:"Pooe", cellNumber:"0603241714"},
    { firstName : "Brian",lastName:"Pooe", cellNumber:"0786452611"}
]
class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state);
    }

    onChange(e) {

        this.setState(
            {
                [e.target.name]: e.target.value
            });
    }

    render() {
        return (
            <div>
                <h3>Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui form">
                        <div className="inline feilds">
                            <div className="field">
                                <label>First name</label>
                                <input type="text" placeholder="First Name" name="firstName" onChange={this.onChange} />
                            </div>
                            <div className="field">
                                <label>Last name</label>
                                <input type="text" placeholder="Last Name" name="lastName" onChange={this.onChange} />
                            </div>
                            <div className="field">
                                <label>Cell Number</label>
                                <input type="text" placeholder="Cell Number" name="cellNumber" onChange={this.onChange} />
                            </div>
                            <div className="seven wide field">
                                <button className="ui button primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
                <hr />
                <Items />
            </div>
        );
    }
}

export default Contacts;