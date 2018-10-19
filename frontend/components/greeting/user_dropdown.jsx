import React from 'react';
import { withRouter } from 'react-router-dom';

class UserDropdown extends React.Component {
  handleLogout() {
    this.props.logout().then(() => {
      this.props.history.push(`/`);
      this.props.closeModal();
    });
  }

  render () {
    return (
      <div className="user-dd-wrapper" style={{top: `${this.props.top + this.props.height+10}px`, right: '10px'}}>
        <ul className="user-dd-list">
          {this.props.teams.map (
            team =>
              <li
                key={team.id}
                className="user-dd-team-list-item"
                onClick = {()=>this.props.history.push(`/teams/${team.id}/home`)}>
                {team.name}
              </li>)}

        </ul>
        <ul className="user-dd-list">
          <li className="user-dd-team-list-item" onClick = {() => this.props.openModal('profile')}>My Profile Settings...</li>
          <li className="user-dd-team-list-item" onClick = {() => this.handleLogout()}>Log Out</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(UserDropdown);
