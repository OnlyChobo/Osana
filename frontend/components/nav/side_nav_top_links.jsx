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
          <a className = 'SideNavItemRow NavPage' href="#">Home</a>
        </Link>
        <Link to={`/teams/${this.props.match.params.teamId}/myTasks`}>
          <a className = 'SideNavItemRow NavPage' href="#">My Tasks</a>
        </Link>
      </div>
    );
  }
}

export default withRouter(SideNavTopLinks);
