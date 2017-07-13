import React from 'react';
import Item from './Item';

const Items = ({ contacts }) => {

    const singleContact = contacts.map((contact,index) => {
       return <Item key={index} contact={contact} />
    });

    return (
        <div className="row">
            <div className="col-md-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <span className="glyphicon glyphicon-list">My contacts</span>
                    </div>
                    {singleContact}
                    <div className="panel-footer">
                        <div className="row">
                            <div className="col-md-6">
                                <h6>
                                    Total Contacts <span className="label label-info">{contacts.length}</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items;