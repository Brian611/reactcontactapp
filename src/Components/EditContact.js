import React, { Component } from 'react';

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '', lastName: '', cellNumber: '', avatar: ''
        }
    }
    render() {
        return (
            <div>
                <h3>Edit Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui form">
                        <div className="inline feilds">
                            <div className="field">
                                <label>First name</label>
                                <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                            </div>
                            <div className="field">
                                <label>Last name</label>
                                <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                            </div>
                            <div className="field">
                                <label>Cell Number</label>
                                <input type="text" placeholder="Cell Number" name="cellNumber" onChange={this.handleChange} value={this.state.cellNumber} />
                            </div>
                            <div className="field">
                                <label htmlFor="">Avatar Url</label>
                                <input type="text" placeholder="avatar url" onChange={this.handleChange} value={this.state.avatar} />
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

export default EditContact;