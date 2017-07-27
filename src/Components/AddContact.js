import React, { Component } from 'react';
import shortid from 'shortid';
import ErrorBlock from './Errors';
import { values } from 'lodash';

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            cellNumber: '',
            avatar: '',
            errors: { firstName: '', lastName: '', cellNumber: '', avatar: '' }

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.clearFormInput = this.clearFormInput.bind(this);
        this.validateInput = this.validateInput.bind(this);
    }
    onHandleChange(e) {
        let name = e.target.name;
        let value = e.target.value;

        this.setState({ [name]: value }, () => {
            this.validateInput(name, value)
        });
    }

    validateInput(name, value) {
        let formErrors = this.state.errors;

        switch (name) {
            case 'firstName':
                switch (true) {
                    case (value.length < 3): formErrors.firstName = `${name} characters must be at least more than 3`;
                        break;
                    case (value.length > 20): formErrors.firstName = `${name} characters can not be more than 20`;
                        break;
                    default:
                        formErrors.firstName = '';
                        break;
                }
                break;
            case 'lastName':
                switch (true) {
                    case (value.length < 3): formErrors.lastName = `${name} characters must be at least more than 3`;
                        break;
                    case (value.length > 20): formErrors.lastName = `${name} characters can not be more than 20`;
                        break;
                    default:
                        formErrors.lastName = ''
                        break;
                }
                break;
            case 'cellNumber':
                switch (true) {
                    case (value.length < 10): formErrors.cellNumber = `${name} cannot be less than 10 digits`;
                        break;
                    case (value.length > 10): formErrors.cellNumber = `${name} cannot be more than 10 digits`;
                        break
                    default:
                        formErrors.cellNumber = ''
                        break;
                }
                break;
            case 'avatar': switch (true) { case (value.length < 6): formErrors.avatar = `${name} cannot be less than 6 characters`; break; default: formErrors.avatar = ''; break; };
                break;
            default:
                break;
        }
        console.log(formErrors);
        this.setState({ errors: formErrors });
    }
    handleSubmit(e) {
        e.preventDefault();
        let newContact = this.state;

        newContact.id = shortid.generate();
        this.props.onAddContact(newContact);
        this.clearFormInput();
    }
    clearFormInput() {
        this.setState({
            id: '',
            firstName: '',
            lastName: '',
            cellNumber: '',
            avatar: '',
            errors: {}
        });
    }
    render() {

        return (
            <div>
                <h3>Add Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="ui form">
                        {values(this.state.errors).some(x => x !== '') && <ErrorBlock errorList={this.state.errors} />}
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

                            <br />
                            <button className="ui inverted brown button" type="submit">Submit</button>
                            <button onClick={() => this.clearFormInput} className="ui inverted brown button" type="reset">Reset</button>

                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

export default AddContact;