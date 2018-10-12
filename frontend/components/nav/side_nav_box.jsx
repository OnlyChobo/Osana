import React, { PropTypes } from 'react';
import SideNavTopLinks from './side_nav_top_links';
import SideNavFavouritesBox from './side_nav_favourites_box';
import SideNavReportsBox from './side_nav_reports_box';
import SideNavTeamBoxContainer from './side_nav_team_box_container';
import logo from '../../../app/assets/images/logo.svg';

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
        <div className = 'SideNavTopTitle'>
          <img className='logo' src={logo} />
          <i className = "fas fa-bars fa-lg" onClick= {this.toggleNav}></i>
        </div>
        <SideNavTopLinks/>
        <SideNavFavouritesBox/>
        <SideNavReportsBox/>
        <SideNavTeamBoxContainer/>
      </div>
    );
  }
}

export default SideNavBox;
