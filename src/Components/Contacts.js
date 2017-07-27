import React, { Component } from 'react';
import update from 'immutability-helper';
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
            selectedContact: {},
            editContact: false,
            addContact: true
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSelectedContact = this.onSelectedContact.bind(this);
        this.onAddContact = this.onAddContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.editContact = this.editContact.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.contacts);
    }
    onSelectedContact(contact) {
        this.setState({ addContact: false, editContact: true, selectedContact: contact });
    }

    onAddContact(newContact) {
        this.setState({ contacts: update(this.state.contacts, { $unshift: [newContact] }) });
    }

    deleteContact(contact) {
        this.setState({
            contacts: update(this.state.contacts, { $splice: [[contact.id, 1]] })
        })
    }

    editContact(newContact) {
        let found = false;
        let x = 0;
        for (let i = 0; i < this.state.contacts.length; i++) {
            if (this.state.contacts[i].id === newContact.id) {
                found = true;
                x = i;
            }
        }
        if (found) {
            let updatedContacts = update(this.state.contacts, {
                [x]: {
                    firstName: { $set: newContact.firstName },
                    lastName: { $set: newContact.lastName },
                    cellNumber: { $set: newContact.cellNumber },
                    avatar: { $set: newContact.avatar },
                },
            });
            this.setState({ contacts: updatedContacts, editContact: false, addContact: true });
        }
    }
    render() {

        return (
            <div>
                <div className="ui grid">
                    <div className="eight wide column">
                        {this.state.addContact && <AddContact onAddContact={this.onAddContact} />}
                        {this.state.editContact && <EditContact contact={this.state.selectedContact} toBeEdited={this.editContact} />}
                    </div>
                    <div className="eight wide colum">
                        <Items deleteContact={this.deleteContact} onSelectedContact={this.onSelectedContact} contacts={this.state.contacts} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;