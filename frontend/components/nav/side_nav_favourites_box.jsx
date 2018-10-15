import React, { PropTypes } from 'react';
import SideNavFavouritesHeaderCollapse from './side_nav_favourites_header_collapse';

class SideNavFavouritesBox extends React.Component {
  render () {
    return (
      <div className='SideNavSection'>
        <SideNavFavouritesHeaderCollapse/>
      </div>
    );
  }
}

export default SideNavFavouritesBox;
