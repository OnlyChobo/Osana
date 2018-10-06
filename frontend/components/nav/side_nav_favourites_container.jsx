import React, { PropTypes } from 'react';
import SideNavFavouritesHeaderCollapse from './side_nav_favourites_header_collapse';
import SideNavFavouritesBody from './side_nav_favourites_body';

class SideNavFavouritesContainer extends React.Component {
  render () {
    return (
      <div className='SideNavSection'>
        <SideNavFavouritesHeaderCollapse/>
      </div>
    );
  }
}

export default SideNavFavouritesContainer;
