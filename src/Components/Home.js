import React, { Component } from 'react';
import {UserContext} from './Context/UserContext';
import ChangeUser from './ChangeUser';
import ShowUser from './ShowUser';


class Home extends Component {
  handleClick = () => {
    this.props.value.setView('404');
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          <UserContext.Consumer>
            {user => user.username ? "Hello " + user.username : "React Context"}
          </UserContext.Consumer>
        </h1>

        <h2>Implementation and Uses</h2>

        <UserContext.Consumer>
          {user => <ChangeUser value={user}/>}
        </UserContext.Consumer>

        <ShowUser/>

        <button className="wide" onClick={this.handleClick}>Change View</button>
      </div>
    );
  }
}

export default Home;
