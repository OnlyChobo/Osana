import React from 'react';
import AddProjectContainer from './add_project_container';
import { withRouter } from 'react-router-dom';

class ProjectList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      favouriteOpen: true,
      recentOpen: true,
      show: false
    };
  }
  componentDidMount() {
    this.props.fetchTeam(this.props.match.params.teamId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.teamId !== nextProps.match.params.teamId) {
      this.props.fetchTeam(nextProps.match.params.teamId);
    }
  }

  hideProjects (comp) {
    this.setState({[comp]: !this.state[comp]});
  }

  render() {
    const recentProjects = this.props.projects.slice();
    recentProjects.sort(
      (a,b) => {
        if (a.created_at > b.created_at) return 1;
        else return -1;
      }
    );
    let favDisplay;
    let recentDisplay;
    let teamId = this.props.match.params.teamId;
    if (this.state.favouriteOpen) {
      favDisplay = (
        <div className = 'ProjectList'>
          {this.props.favourites.map(
            project =>
            <div
              className='TileStructure'
              key={project.id}
              onClick={()=>this.props.history.push(`/teams/${teamId}/projects/${project.id}`)}>
              <div className='ProjectTile-card'>
                <i className="far fa-list-alt fa-2x"></i>
              </div>
              <div className='TileStructure-name'>{project.name}</div>
            </div>
          )}
        </div>
      );
    }

    if (this.state.recentOpen) {
      recentDisplay = (
        <div className = 'ProjectList'>
          {recentProjects.map(
            project =>
            <div
              className='TileStructure'
              key={project.id}
              onClick={()=>this.props.history.push(`/teams/${teamId}/projects/${project.id}`)}>
              <div className='ProjectTile-card'>
                <i className="far fa-list-alt fa-2x"></i>
              </div>
              <div className='TileStructure-name'>{project.name}</div>
            </div>
          )}
          <div className='TileStructure' onClick={() => this.props.openModal('addProject')}>
            <div className='AddProjectTile-card'>+</div>
            <div className='TileStructure-name AddTileStructure-name'>
              New Project
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className = 'Home-container'>
        <div className = 'HomeMiddle-container'>
          <div className = 'RecentProjects-container'>
            <div className = 'RecentProjects-header'>
              <div
                onClick = {() => this.hideProjects('favouriteOpen')}
                className = 'RecentProjects-title'>
                Favourites
              </div>
            </div>
            {favDisplay}
          </div>

          <div className = 'RecentProjects-container'>
            <div className = 'RecentProjects-header'>
              <div
                onClick = {() => this.hideProjects('recentOpen')}
                className = 'RecentProjects-title'>
                Recent Projects
              </div>
            </div>
            {recentDisplay}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectList);
