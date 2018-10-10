import React from 'react';
import { withRouter } from 'react-router-dom';

class UserDropdown extends React.Component {
  render () {
    return (
      <div className="user-dd-wrapper">
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
          <li className="user-dd-team-list-item">My Profile Settings...</li>
          <li className="user-dd-team-list-item" onClick = {this.props.logout}>Log Out</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(UserDropdown);