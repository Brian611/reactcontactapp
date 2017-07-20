import React from 'react';
import Item from './Item';

const Items = ({ contacts, onSelectedContact, deleteContact }) => {

    const singleContact = contacts.map((contact) => {
        return <Item deleteContact={deleteContact} onSelectedContact={onSelectedContact} key={contact.id} contact={contact} />
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