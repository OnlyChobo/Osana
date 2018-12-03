import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { timingSafeEqual } from 'crypto';

class SearchBarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProjects: [],
      loading: false
    };
    
  }

  componentDidMount() {
    this.handleSearch(this.props.searchText);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.searchText != nextProps.searchText) {
      this.setState({loading: true});
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.handleSearch(nextProps.searchText);
        this.setState({loading: false});
      }, 1000);
    }
  }

  handleSearch(text) {
    const newProjects = [];
    this.props.projects.forEach( project => {
      if (text && project.name.startsWith(text)) {
        newProjects.push(project);
      }
    });
    this.setState({selectedProjects: newProjects.slice()});
  }

  endSearch() {
    this.props.closeModal();
    document.getElementById('searchBar').value = "";
  }

  render () {
    const sProjects = this.state.selectedProjects;
    let dropdownOptions;
    if (this.state.loading) {
      dropdownOptions = (
        <ul className="user-search-dd-list" style={{top: `${this.props.top + this.props.height+3}px`, left: `${this.props.left}px`}}>
          <div className="user-search-dd-list-item loading-container"><ReactLoading type='spokes' color='#000' height={35} width={35} /></div>
        </ul>
      )
    }
    else if (this.props.searchText != "" && sProjects.length > 0) {
      dropdownOptions = (
        <ul className="user-search-dd-list" style={{top: `${this.props.top + this.props.height+3}px`, left: `${this.props.left}px`}}>
          {sProjects.map( project => 
            <Link key={project.id} to={`/teams/${this.props.teamId}/projects/${project.id}`}>
              <li className="user-search-dd-list-item"  onClick = {() => this.endSearch()}>
                {project.name}
              </li>
            </Link>
          )}
        </ul>
      );
    } else {
      dropdownOptions = (
        <ul className="user-search-dd-list" style={{top: `${this.props.top + this.props.height+3}px`, left: `${this.props.left}px`}}>
          <Link to={`/teams/${this.props.teamId}/tasksCreated`}>
            <li className="user-search-dd-list-item" onClick = {() => this.endSearch()}>
              Tasks I've Created
            </li>
          </Link>
          <Link to={`/teams/${this.props.teamId}/tasksAssigned`}>
            <li className="user-search-dd-list-item" onClick = {() => this.endSearch()}>
              Tasks I've Assigned to Others
            </li>
          </Link>
          <Link to={`/teams/${this.props.teamId}/tasksCompleted`}>
            <li className="user-search-dd-list-item" onClick = {() => this.endSearch()}>
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
