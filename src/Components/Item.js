import React from 'react';

function Item({ contact, onSelectedContact , deleteContact}) {

    return (
        <div className="item" onClick={() => onSelectedContact(contact)}>
            <div className="right floated content">
                <button className="ui inverted brown  icon button">
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                </button>
                <button onClick={() => deleteContact(contact)} className="ui inverted brown  icon button">
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
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