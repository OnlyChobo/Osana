import React from 'react';
import AddProjectContainer from '../main/add_project_container';

class UserDropdown extends React.Component {
  render () {
    return (
      <div className="user-dd-wrapper">
        <ul className="user-dd-list">
          <li className="user-dd-team-list-item">Task</li>
          <li className="user-dd-team-list-item" onClick={() => this.props.openModal('addProject')}>Project</li>
          <li className="user-dd-team-list-item">Invite</li>
        </ul>
      </div>
    );
  }
}

export default UserDropdown;
