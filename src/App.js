import React, { Component } from 'react';
import './App.css';
import UsersList from './components/UsersList';
import FormAdd from './components/FormAdd';

import { addUser, deleteUser, editUser } from './actions';


class App extends Component {
  constructor(props) {
    super(props);
   
    this.store = this.props.store;
  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleAdd = name => {
    this.store.dispatch(addUser(name));
  }

  handleDelete = id => {
    this.store.dispatch(deleteUser(id));
  }

  handleEdit = (id, name) => {
    this.store.dispatch(editUser(id, name));
  }
  
  render() {
    const users = this.store.getState();

    return (
      <div className="App">
        <UsersList 
          users={users}
          onDelete={this.handleDelete}
          onEdit={this.handleEdit} 
        />
        <FormAdd onAdd={this.handleAdd} />  
      </div>
    );
  }
}

export default App;
