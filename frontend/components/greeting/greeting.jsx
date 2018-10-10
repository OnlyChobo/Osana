import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  handleLogout() {
    this.props.logout().then(() => {
      console.log(this.props.history);
      this.props.history.push(`/`);
    }

    );
  }
  render () {
    const currentUser = this.props.currentUser;
    return (
      <div className = 'navBar-top'>
        <div>
          <input type='text' />
          <ul>
            {this.props.teams.map (team => <li key={team.id}>{team.name}</li>)}
          </ul>
          <h3>Welcome {currentUser.username}</h3>
          <button onClick={() => this.handleLogout()}></button>
        </div>
      </div>
    );
  }
}

export default withRouter(Greeting);
