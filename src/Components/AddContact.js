import React, { Component } from 'react';
import shortid from 'shortid';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            cellNumber: '',
            avatar: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }
    onHandleChange(e) {

        this.setState({ [e.target.name]: e.target.value });

    }
    handleSubmit(e) {
        e.preventDefault();
        let guid = shortid.generate();
        this.setState({ id: guid });
        console.log("add contact state :", this.state);
        this.props.onAddContact(this.state);
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            cellNumber: '',
            avatar: ''
        });
    }
    render() {
        return (
            <div>
                <h3>Add Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui form">
                        <div className="inline feilds">
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
                                <input type="text" placeholder="avatar url" name="avatar" onChange={this.onHandleChange} value={this.state.avatar} />
                            </div>

                            <div className="seven wide field">
                                <button className="ui button primary" type="submit">Submit</button>
                                <button onClick={() => this.setState({})} className="ui button primary" type="reset">Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddContact;