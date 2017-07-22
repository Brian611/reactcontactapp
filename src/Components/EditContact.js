import React, { Component } from 'react';
import { isEqual } from 'lodash'

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.contact.id,
            firstName: props.contact.firstName,
            lastName: props.contact.lastName,
            cellNumber: props.contact.cellNumber,
            avatar: props.contact.avatar
        }

        this.onHandleChange = this.onHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillReceiveProps({ contact }) {
        if (!isEqual(this.props.contact, contact)) {
            this.setState({
                id: contact.id,
                firstName: contact.firstName,
                lastName: contact.lastName,
                cellNumber: contact.cellNumber,
                avatar: contact.avatar
            });
        } else {
            console.log("same object");
        }
    }
    handleSubmit(e) {
        e.preventDefault();

        this.props.toBeEdited(this.state);
    }
    onHandleChange(e) {

        this.setState({ [e.target.name]: e.target.value });

    }
    render() {

        return (
            <div>
                <h3>Edit Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui form">
                        <div className="inline feilds">
                            <input type="hidden" name="id" defaultValue={this.state.id} />
                            <div className="field">
                                <label>First name</label>
                                <input type="text" placeholder="First Name" name="firstName" onChange={this.onHandleChange} value={this.state.firstName} />
                            </div>
                            <div className="field">
                                <label>Last name</label>
                                <input type="text" placeholder="Last Name" name="lastName" onChange={this.onHandleChange} value={this.state.lastName} />
                            </div>
                            <div className="field">
                                <label>Cell Number</label>
                                <input type="text" placeholder="Cell Number" name="cellNumber" onChange={this.onHandleChange} value={this.state.cellNumber} />
                            </div>
                            <div className="field">
                                <label htmlFor="">Avatar Url</label>
                                <input type="text" placeholder="avatar url" onChange={this.onHandleChange} value={this.state.avatar} />
                            </div>
                            <div className="seven wide field">
                                <button className="ui inverted brown button" type="submit">Submit</button>
                                <button onClick={() => this.setState({})} className="ui inverted brown button" type="reset">Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditContact;