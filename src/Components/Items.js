import React from 'react';
import Item from './Item';
function Items(props) {
    return (
    <div className="row">
                    <div className="col-md-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <span className="glyphicon glyphicon-list">My contacts</span>
                            </div>
                           <Item />
                            <div className="panel-footer">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>
                                            Total Contacts <span className="label label-info">25</span></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Items;