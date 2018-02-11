import React from 'react';
import Button from './Button';

class FormAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name

        if (name) {
            this.props.onAdd(name);
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
                <Button type="submit" disabled={disabled}>Add new user</Button>
            </form>
        );
    }
}

export default FormAdd;