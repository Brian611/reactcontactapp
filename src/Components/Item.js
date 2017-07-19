import React from 'react';

function Item({ contact, onSelectedContact }) {

    return (
            <div className="item" onClick={() => onSelectedContact(contact)}>
                <div className="right floated content">
                    <div className="negative button ui">delete</div>
                </div>
                <img className="ui avatar image" src={contact.avatar} alt={contact.firstName}></img>
                <div className="content">
                    <div className="header">{contact.firstName}  {contact.lastName}</div>
                    <div className="ui label">Cell No : {contact.cellNumber} <br />
                        ID : {contact.id}</div>
                </div>
            </div>
    )
}

export default Item;