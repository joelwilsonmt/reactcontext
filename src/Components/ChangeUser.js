import React, { Component } from 'react';

class ChangeUser extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.value.updateUser(this.state.value);
  }
  clear = () => {
    this.props.value.updateUser('');
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>username:</h1><br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default ChangeUser;
