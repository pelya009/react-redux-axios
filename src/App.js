import React from 'react';
import './App.css';
import UsersListContainer from './containers/UsersListContainer';
import FormAddContainer from './containers/FormAddContainer';

function App() {
    return (
      <div className="App">
        <UsersListContainer />
        <FormAddContainer />  
      </div>
    );
}

export default App;
