import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import SelectProjectContainer from '../main/select_project_container';

class SideNavTeamItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }

  toggleShow () {
    this.setState({show: true});
  }

  toggleHide () {
    this.setState({show: false});
  }

  render() {
    return (
      <div
        className='SideNavItemRow NavPage'
        onMouseEnter={ () => this.toggleShow() }
        onMouseLeave={ () => this.toggleHide() }
        onClick = { () => {
          this.props.history.push(`/teams/${this.props.project.teamId}/projects/${this.props.project.id}`);
          this.props.closeCommentPane();
        }}>

        <svg className='SideNavListIcon' viewBox='0 0 24 24'>
          <circle cx="50%" cy="50%" r="8" fill="white" />
        </svg>
        <span className = "SideNavItemRow-name">{this.props.project.name}</span>
        {(this.state.show) ?
          <i
            className="fas fa-ellipsis-h"
            id={`project${this.props.project.id}`}
            onClick={e =>
              {
                e.stopPropagation();
                this.props.setModalPositions(document.getElementById(`project${this.props.project.id}`));
                this.props.openModal('projectOptions');
                this.props.selectProject(this.props.project);
              }}></i> :
          <div></div>}
      </div>
    );
  }
}

export default withRouter(SideNavTeamItem);
