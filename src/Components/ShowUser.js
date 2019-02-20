import React, { Component } from 'react';
import {UserContext} from './Context/UserContext';


class ShowUser extends Component {
  handleClick = () => {
    this.props.value.setView('Home');
  }
  render() {
    console.log(this.props);
    return (
    <div className="container">
      <h1>
        <UserContext.Consumer>{(user) => (
          user.username ? user.username : "Username Will Appear Here"
        )}
        </UserContext.Consumer></h1>
    </div>
    );
  }
}

export default ShowUser;
