import React from 'react';
import Button from './Button';

class SingleUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.editing) {
            this.refs.name.focus();
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const name = this.refs.name.value;
        
        this.props.onEdit(this.props.id, name);
        this.setState({ editing: false });
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }

    handleEdit = () => {
        this.setState({ editing: true });
    }

    renderDisplay() {
        return (
            <div className='singleUser'>
                <span className='showUserName'>{this.props.name}</span>
                <Button onClick={this.handleEdit}>Edit</Button>
                <Button onClick={this.handleDelete}>Delete</Button>
            </div>
        );
    }

    renderForm() {
        return (
            <form onSubmit={this.handleSubmit} className='singleUser'>
                <input type="text" ref="name" defaultValue={this.props.name} />
                <Button type="submit">Save</Button>
            </form>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}

export default SingleUser;