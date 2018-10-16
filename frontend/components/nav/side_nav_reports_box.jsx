import React, { PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';
import SideNavReportsItem from './side_nav_reports_item';

class SideNavReportsBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
  }
  toggle() {
    const curr_status = this.state.open;
    this.setState({open: !curr_status});
  }

  render() {
    let html;
    if (this.state.open) {
      html = (
        <div>
          <Link to={`/teams/${this.props.match.params.teamId}/tasksCreated`}>
            <SideNavReportsItem name="Tasks I've Created" />
          </Link>
          <Link to={`/teams/${this.props.match.params.teamId}/tasksAssigned`}>
            <SideNavReportsItem name="Tasks I've Assigned to Others" />
          </Link>
          <Link to={`/teams/${this.props.match.params.teamId}/tasksCompleted`}>
            <SideNavReportsItem name="Recently Completed Tasks" />
          </Link>
        </div>
      );
    }
    return (
      <div className='SideNavSection'>
        <div className='SideNavTitles'>
          <span className='SideNavTitles-name' onClick = {() => this.toggle.bind(this)()}>Reports</span>
        </div>
        {html}
      </div>
    );
  }
}

export default withRouter(SideNavReportsBox);
