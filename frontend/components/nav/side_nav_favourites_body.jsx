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
          {this.props.favourites.map (favourite => <SideNavFavouritesItem key={favourite.id} name={favourite.name}/>)}
        </div>
        <SideNavFavouritesOptions/>
      </div>
    );
  }
}

export default SideNavFavouritesBody;
