import React, { PropTypes } from 'react';
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
    this.props.getUserInfo(this.props.currentUser);
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
        <div className = 'SideNavTop'>
          <div className = 'SideNavTopTitle'>
            <img className='logo' src={logo} />
            <div className='navToggleBox'>
              <i className = "fas fa-bars fa-lg" onClick= {this.toggleNav}></i>
            </div>
          </div>
          <SideNavTopLinks/>
          <SideNavFavouritesBox/>
          <SideNavReportsBox/>
          <SideNavTeamBoxContainer/>
        </div>
        <div className = 'SideNavBottom'>
          <img className='invitePeople' src={invitePeople} />
          <div>Invite your team and start collaborating!</div>
          <button>Invite to Osana</button>
        </div>
      </div>
    );
  }
}

export default SideNavBox;
