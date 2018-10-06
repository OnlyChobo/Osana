import React, { PropTypes } from 'react';
import SideNavReportsItem from './side_nav_reports_item';

class SideNavReportsContainer extends React.Component {
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
          <SideNavReportsItem name="Tasks I've Created" />
          <SideNavReportsItem name="Tasks I've Assigned to Others" />
          <SideNavReportsItem name="Recently Completed Tasks" />
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

export default SideNavReportsContainer;
