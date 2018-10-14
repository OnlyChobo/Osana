import React, { PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideNavTopLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className = 'SideNavTopLinks'>
        <Link to={`/teams/${this.props.match.params.teamId}/home`}>
          <div className='SideNavItemRow NavPage'>
            <i className="navIcons fas fa-home"></i>
            <div>Home</div>
          </div>
        </Link>
        <Link to={`/teams/${this.props.match.params.teamId}/myTasks`}>
          <div className = 'SideNavItemRow NavPage'>
            <i className="fas fa-check-circle navIcons"></i>
            <div>My Tasks</div>
          </div>
        </Link>
      </div>
    );
  }
}

export default withRouter(SideNavTopLinks);
