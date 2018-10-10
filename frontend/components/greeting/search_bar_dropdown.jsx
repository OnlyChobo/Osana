import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBarDropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const selected = this.props.projects;
    let dropdownOptions;
    if (selected.length > 0) {
      dropdownOptions = (
        <ul className="user-search-dd-list">
          {selected.map( project => <li key={project.id} className="user-search-dd-list-item">{project.name}</li>)}
        </ul>
      );
    } else {
      dropdownOptions = (
        <ul className="user-search-dd-list">
          <li className="user-search-dd-list-item">Tasks I've Created</li>
          <li className="user-search-dd-list-item">Tasks I've Assigned to Others</li>
          <li className="user-search-dd-list-item">Recently Completed Tasks</li>
        </ul>
      );
    }
    return (
      <div className="user-search-dd-wrapper">
        {dropdownOptions}
      </div>
    );
  }
}

export default withRouter(SearchBarDropdown);
