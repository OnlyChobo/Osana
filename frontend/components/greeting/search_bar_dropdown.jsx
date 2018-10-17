import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SearchBarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProjects: []
    };
  }

  handleSearch(e) {
    const newSelected = [];
    this.props.projects.forEach( project => {
      if (e.target.value.length > 0 && project.name.startsWith(e.target.value)) {
        newSelected.push(project);
      }
    });
    this.setState({selectedProjects: newSelected.slice()});
  }

  render () {
    const selected = this.state.selectedProjects;
    let dropdownOptions;
    if (selected.length > 0) {
      dropdownOptions = (
        <ul className="user-search-dd-list" style={{top: `${this.props.top + this.props.height+3}px`, left: `${this.props.left}px`}}>
          {selected.map( project => <li key={project.id} className="user-search-dd-list-item">{project.name}</li>)}
        </ul>
      );
    } else {
      dropdownOptions = (
        <ul className="user-search-dd-list" style={{top: `${this.props.top + this.props.height+3}px`, left: `${this.props.left}px`}}>
          <Link to={`/teams/${this.props.match.params.teamId}/tasksCreated`}>
            <li className="user-search-dd-list-item" onClick = {() => this.props.closeModal()}>
              Tasks I've Created
            </li>
          </Link>
          <Link to={`/teams/${this.props.match.params.teamId}/tasksAssigned`}>
            <li className="user-search-dd-list-item" onClick = {() => this.props.closeModal()}>
              Tasks I've Assigned to Others
            </li>
          </Link>
          <Link to={`/teams/${this.props.match.params.teamId}/tasksCompleted`}>
            <li className="user-search-dd-list-item" onClick = {() => this.props.closeModal()}>
              Recently Completed Tasks
            </li>
          </Link>
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
