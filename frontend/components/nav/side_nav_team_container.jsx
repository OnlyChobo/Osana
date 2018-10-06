import React, { PropTypes } from 'react';
import SideNavTeamItem from './side_nav_team_item';
import SideNavTeamIconItem from './side_nav_team_icon_item';

class SideNavTeamContainer extends React.Component {
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
          <SideNavTeamItem name="Project1"/>
          <SideNavTeamItem name="Project2"/>
          <SideNavTeamItem name="Project3"/>
        </div>

      </div>
    );
  }
}

export default SideNavTeamContainer;
