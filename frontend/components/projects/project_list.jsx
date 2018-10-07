import React from 'react';

class ProjectList extends React.Component {
  componentDidMount() {
    this.props.fetchAllProjects();
  }

  render() {
    const recentProjects = this.props.projects.slice();
    recentProjects.sort(
      (a,b) => {
        if (a.created_at > b.created_at) return 1;
        else return -1;
      }
    );
    return (
      <div>
        <h1>Recent Projects</h1>
        <ul>
          {recentProjects.map( project => <li key={project.id}>{project.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default ProjectList;
