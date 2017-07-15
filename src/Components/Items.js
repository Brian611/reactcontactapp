import React from 'react';
import Item from './Item';

const Items = ({ contacts, onSelectedContact }) => {

    const singleContact = contacts.map((contact) => {
        return <Item onSelectedContact={onSelectedContact} key={contact.id} contact={contact} />
    });

    return (
        <div className="ui celled animated list">
            {singleContact}
            <h6> Total Contacts <span className="label label-info">{contacts.length}</span></h6>
        </div>
    )
}

export default Items;