import React, { Component } from 'react';
import Items from './Items';
import AddContact from './AddContact';
import EditContact from './EditContact';

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
            selectedContact: { firstName: '', lastName: '', cellNumber: '', avatar: '' },
            editContact: false,
            addContact: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSelectedContact = this.onSelectedContact.bind(this);
        this.onAddContact = this.onAddContact.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log(this.state.contacts);
    }
    onSelectedContact(contact) {
        this.setState({ selectedContact: contact });
    }

    onAddContact(newContact) {
        const toBeAddedContact = [...this.state.contacts, newContact]
        this.setState({ contacts: toBeAddedContact });
        console.log("new contact", this.state);
    }
    render() {

        return (
            <div>
                <div className="ui grid">
                    <div className="eight wide column">
                        {this.state.addContact && <AddContact onAddContact={this.onAddContact} />}
                        {this.state.editContact && <EditContact />}
                    </div>
                    <div className="eight wide colum">
                        <Items onSelectedContact={this.onSelectedContact} contacts={this.state.contacts} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;