import React from 'react';
import axios from "axios";


export var UserContext = React.createContext();

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.updateUser = (username) => {
      this.setState({
        username: username
      });
    }
    this.setView = (view) => {
      this.setState({
        view: view
      });
    }
    this.state = {
      updateUser: this.updateUser,
      setView: this.setView,
      user: '',
      view: 'Home'
    }
  }

  render() {
    //<StateProvider> component returns the <StateContext.Provider> object
    //with the value passing to anything inside of it the state contained
    //in the initial and subsequent setting of this Component's state
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
