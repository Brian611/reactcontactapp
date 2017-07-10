import React from 'react';

function Item(props) {
    return (<div className="panel-body">
        <ul className="list-group">
            <li className="list-group-item">
                hahaha
                <div className="pull-right action-buttons">
                    <a href="http://www.jquery2dotnet.com"><span className="glyphicon glyphicon-pencil"></span></a>
                    <a href="http://www.jquery2dotnet.com" className="trash"><span className="glyphicon glyphicon-trash"></span></a>
                </div>
            </li>
        </ul>
    </div>)
}

export default Item;