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
        <div className = 'navBar-topRight'>
          <div>
            <input type='text' className='topNavBar-search' placeholder='Go to any project or task...'/>
          </div>
          <a className='topNavBar-addButton'/>
          <div className='smallAvatar'>DX</div>
          <ul>
            {this.props.teams.map (team => <li key={team.id}>{team.name}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Greeting);
