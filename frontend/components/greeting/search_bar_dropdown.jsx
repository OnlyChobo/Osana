import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBarDropdown extends React.Component {
  render () {
    return (
      <div className="user-dd-wrapper">
        <ul className="user-dd-list">
          <li className="user-dd-team-list-item">Tasks I've Created</li>
          <li className="user-dd-team-list-item">Tasks I've Assigned to Others</li>
          <li className="user-dd-team-list-item">Recently Completed Tasks</li>
        </ul>
      </div>
    );
  }
}

export default withRouter(SearchBarDropdown);
