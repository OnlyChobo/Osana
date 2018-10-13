import React, { PropTypes } from 'react';
import SideNavTeamItemContainer from './side_nav_team_item_container';
import SideNavTeamIconItem from './side_nav_team_icon_item';

class SideNavTeamBox extends React.Component {
  render() {
    return (
      <div className='SideNavSection'>
        <div className='SideNavTeamTitle NavPage'>
          <span className='SideNavTeamTitle-name'>Team</span>
        </div>
        <div className='SideNavTeamMemberList'>
          {this.props.teamMembers.map (teamMember => <SideNavTeamIconItem key={teamMember.id} teamMember={teamMember}/>)}
          <div className='SideNavTeamInvite'>Invite People</div>
        </div>
        <div>
          {this.props.projects.map (project => <SideNavTeamItemContainer key={project.id} project={project}/>)}
        </div>

      </div>
    );
  }
}

export default SideNavTeamBox;
