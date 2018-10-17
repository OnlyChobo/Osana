import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import SideNavTopLinks from './side_nav_top_links';
import SideNavFavouritesBox from './side_nav_favourites_box';
import SideNavReportsBox from './side_nav_reports_box';
import SideNavTeamBoxContainer from './side_nav_team_box_container';
import logo from '../../../app/assets/images/logo.svg';
import invitePeople from '../../../app/assets/images/invite_peeps.png';

class SideNavBox extends React.Component {
  constructor (props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
  }
  componentDidMount() {
    this.props.getUserInfo(this.props.currentUser).then (
      this.props.fetchTeam(this.props.match.params.teamId)
    );
  }

  toggleNav (e) {
    return this.props.toggleLeftNav();
  }
  render () {
    let navClass;
    if (!this.props.leftNavStatus) {
      navClass = 'SideNavBox display-none';
    } else {
      navClass = 'SideNavBox display-block';
    }
    return (
      <div className = {navClass}>
        <div className='SideNavFixed'>
          <div className = 'SideNavTopTitle'>
            <img className='logo' src={logo} />
            <div className='navToggleBox'>
              <i className = "fas fa-bars fa-lg" onClick= {this.toggleNav}></i>
            </div>
          </div>
          <SideNavTopLinks/>
        </div>
        <div className = 'SideNavScrollable'>
          <SideNavFavouritesBox/>
          <SideNavReportsBox/>
          <SideNavTeamBoxContainer/>
          <div className='SideNavBottom'>
            <div className = 'SideNavSection'>
              <img className='invitePeople' src={invitePeople} />
              <div className='SideNavTeamInvite-text'>Invite your team and start collaborating!</div>
              <div className='SideNavTeamInvite-button'>Invite to Osana</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SideNavBox);
