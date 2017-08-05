import React from 'react';
import Item from './Item';

const Items = ({ contacts, onSelectedContact, deleteContact }) => {

    const singleContact = contacts.map((contact) => {
        if (contacts) {
            return <Item key={contact.id} deleteContact={deleteContact} onSelectedContact={onSelectedContact} contact={contact} />
        } else {
            return <h1>loading...</h1>
        }
    });

    return (
        <div>
            <h3 id="contact-list">Contact List</h3>
            <div className="ui celled animated list">
                {singleContact}
                <h6> Total Contacts <span className="label label-info">{contacts.length}</span></h6>
            </div>
        </div>
    )
}

export default Items;