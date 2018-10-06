import React, { PropTypes } from 'react';
import SideNavFavouritesOptions from './side_nav_favourites_options';
import SideNavFavouritesItem from './side_nav_favourites_item';

class SideNavFavouritesBody extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>
          <SideNavFavouritesItem name="Project1"/>
          <SideNavFavouritesItem name="Project2"/>
          <SideNavFavouritesItem name="Project3"/>
        </div>
        <SideNavFavouritesOptions/>
      </div>
    );
  }
}

export default SideNavFavouritesBody;
