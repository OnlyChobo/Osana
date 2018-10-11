import React, { PropTypes } from 'react';
import SideNavTeamItem from './side_nav_team_item';
import SideNavTeamIconItem from './side_nav_team_icon_item';

class SideNavTeamBox extends React.Component {
  render() {
    return (
      <div className='SideNavSection'>
        <div className='SideNavTeamTitle NavPage'>
          <span className='SideNavTeamTitle-name'>Team</span>
        </div>
        <div className='SideNavTeamMemberList'>
          <SideNavTeamIconItem />
          <SideNavTeamIconItem />
          <SideNavTeamIconItem />
          <div className='SideNavTeamInvite'>Invite People</div>
        </div>
        <div>
          {this.props.projects.map (project => <SideNavTeamItem key={project.id} name={project.name}/>)}
        </div>

      </div>
    );
  }
}

export default SideNavTeamBox;
