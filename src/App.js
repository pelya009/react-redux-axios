import React from 'react';
import './App.css';
import UsersListContainer from './containers/UsersListContainer';
import FormAddContainer from './containers/FormAddContainer';
import TodosListContainer from './containers/TodosListContainer';

function App() {
  return (
    <div className='App'>
      <UsersListContainer />
      <FormAddContainer />
      <TodosListContainer />
    </div>
  );
}

export default App;
