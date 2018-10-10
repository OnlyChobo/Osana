import React from 'react';
import Modal from '../home/modal';
import AddProjectContainer from './add_project_container';

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

  hideProjects (comp) {
    this.setState({[comp]: !this.state[comp]});
  }

  showModal() {
    return () => this.setState({ show: true });
  }

  hideModal() {
    return () => this.setState({ show: false });
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
    if (this.state.favouriteOpen) {
      favDisplay = (
        <div className = 'ProjectList'>
          {recentProjects.map(
            project =>
            <div className='TileStructure' key={project.id}>
              <div className='ProjectTile-card'></div>
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
            <div className='TileStructure' key={project.id}>
              <div className='ProjectTile-card'></div>
              <div className='TileStructure-name'>{project.name}</div>
            </div>
          )}
          <div className='TileStructure' onClick={this.showModal()}>
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
        <Modal show={this.state.show} handleClose={this.hideModal()}>
          <AddProjectContainer />
        </Modal>
        <div className = 'HomeMiddle-container'>
          <div className = 'RecentProjects-container'>
            <div className = 'RecentProjects-header'>
              <div
                onClick = {() => this.hideProjects('favouriteOpen')}
                className = 'RecentProjects-title'>
                Favourite Projects
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

export default ProjectList;
