import React, { Component } from 'react';
import Items from './Items';

var contacts = [
    { id: "23TplPdS", firstName: "Gloria", lastName: "Botha", cellNumber: "5465454654", avatar: "http://avatars.jurko.net/uploads/avatar_24155.jpg" },
    { id: "46Juzcyx", firstName: "Tiny", lastName: "de Klerk", cellNumber: "0154455454", avatar: "http://img1.jurko.net/avatar_7787.jpg" },
    { id: "2WEKaVNO", firstName: "Rose", lastName: "Wiliam", cellNumber: "0548458669", avatar: "http://avatars.jurko.net/uploads/avatar_23415.gif" }
]
class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contacts,
            selectedContact: { firstName: "", lastName: "", cellNumber: "", avatar: "" }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSelectedContact = this.onSelectedContact.bind(this);
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
    onSelectedContact(contact) {
        this.setState({ selectedContact: contact });
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
                                <input type="text" placeholder="First Name" name="firstName" onChange={this.onChange} value={this.state.selectedContact.firstName} />
                            </div>
                            <div className="field">
                                <label>Last name</label>
                                <input type="text" placeholder="Last Name" name="lastName" onChange={this.onChange} value={this.state.selectedContact.lastName} />
                            </div>
                            <div className="field">
                                <label>Cell Number</label>
                                <input type="text" placeholder="Cell Number" name="cellNumber" onChange={this.onChange} value={this.state.selectedContact.cellNumber} />
                            </div>
                            <div className="field">
                                <label htmlFor="">Avatar Url</label>
                                <input type="text" placeholder="avatar url" onChange={this.onChange} value={this.state.selectedContact.avatar} />
                            </div>

                            <div className="seven wide field">
                                <button className="ui button primary" type="submit">Submit</button>
                                <button onClick={() => this.setState({ selectedContact: {} })} className="ui button primary" type="reset">Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
                <hr />
                <Items onSelectedContact={this.onSelectedContact} contacts={this.state.contacts} />
            </div>
        );
    }
}

export default Contacts;