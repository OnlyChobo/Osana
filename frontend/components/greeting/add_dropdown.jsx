import React from 'react';
import AddProjectContainer from '../main/add_project_container';

class UserDropdown extends React.Component {
  render () {
    return (
      <div className="user-dd-wrapper" style={{top: `${this.props.top + this.props.height+10}px`, right: `55px`}}>
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
