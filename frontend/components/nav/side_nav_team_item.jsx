import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';

class SideNavTeamItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
  }
  toggleShow () {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
      <div
        className='SideNavItemRow NavPage'
        onMouseEnter={ () => this.toggleShow() }
        onMouseLeave={ () => this.toggleShow() }
        onClick = { () => this.props.history.push(`/teams/${this.props.project.teamId}/projects/${this.props.project.id}`)}>
        <svg className='SideNavListIcon' viewBox='0 0 24 24'>
          <circle cx="50%" cy="50%" r="8" fill="white" />
        </svg>
        <span className = "SideNavItemRow-name">{this.props.project.name}</span>
        {(this.state.show) ?
          <i
            className="fas fa-ellipsis-h"
            onClick={e =>
              {
                e.stopPropagation();
                this.props.openModal('projectOptions');
              }}></i> :
          <div></div>}
      </div>
    );
  }
}

export default withRouter(SideNavTeamItem);
