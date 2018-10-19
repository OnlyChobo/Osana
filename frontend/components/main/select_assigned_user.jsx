import React from 'react';
import merge from 'lodash/merge';

class SelectAssignedUser extends React.Component {
  handleUser(user) {
    const updatedTask = merge({}, this.props.task);
    updatedTask.user_assigned_id = user;
    this.props.updateTask(updatedTask);
    this.props.closeModal();
  }

  render () {
    return (
      <div>
        <div
          className="user-dd-wrapper"
          style={{top: `${this.props.top + this.props.height+10}px`, left: `${this.props.left}px`}}
          onClick={e => e.stopPropagation()}>
          <ul className="user-dd-list">
            {this.props.teamMembers.map (teamMember =>
              <li
                key={teamMember.id}
                className="user-dd-team-list-item user-only"
                onClick={() => this.handleUser(teamMember.id)}>
                  <div className='smallAvatar'>{teamMember.fname[0]+teamMember.lname[0]}</div>
                  <div className='user-vertical'>
                    <div>{teamMember.fname + " " + teamMember.lname}</div>
                    <div className='user-email'>{teamMember.email}</div>
                  </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default SelectAssignedUser;
