import React, { Component } from 'react';

class NotFound extends Component {

  handleClick = () => {
    this.props.value.setView('Home');
  }
  render() {
    console.log(this.props);
    return (
    <div>
      <h1>404 Not Found!</h1>
      <h2>Oh No! Go Back!</h2>
      <button onClick={this.handleClick}>Go Back!</button>
    </div>
    );
  }
}

export default NotFound;
