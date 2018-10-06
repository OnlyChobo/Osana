import React, { PropTypes } from 'react';
import SideNavTopLinks from './side_nav_top_links';
import SideNavFavouritesContainer from './side_nav_favourites_container';
import SideNavReportsContainer from './side_nav_reports_container';
import SideNavTeamContainer from './side_nav_team_container';

class SideNavContainer extends React.Component {
  render () {
    return (
      <div className = 'SideNavContainer'>
        <SideNavTopLinks/>
        <SideNavFavouritesContainer/>
        <SideNavReportsContainer/>
        <SideNavTeamContainer/>
      </div>
    );
  }
}

export default SideNavContainer;
