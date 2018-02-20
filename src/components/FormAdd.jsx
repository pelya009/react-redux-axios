import React, { Component } from 'react';

class FormAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

        this.store = this.props.store;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name

        if (name) {
            this.props.addUser(name);
            this.setState({ name: '' });
        }
    }

    handleChange = (event) => {
        const name = event.target.value
        this.setState({ name });
    }

    render() {
        const disabled = !this.state.name;

        return (
            <form onSubmit={this.handleSubmit} className='addUserForm'>
                <input
                    type="text"
                    value={this.state.name}
                    placeholder="What's new user's name?"
                    onChange={this.handleChange} />
                <button type="submit" disabled={disabled}>Add new user</button>
            </form>
        );
    }
}

export default FormAdd;