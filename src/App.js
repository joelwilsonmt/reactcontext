import React, { Component } from 'react';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import './App.css';
import {UserContext} from './Components/Context/UserContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserContext.Consumer>{(user) => (
          user.view === 'Home' ? <Home value={user}/> : <NotFound value={user}/>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default App;
