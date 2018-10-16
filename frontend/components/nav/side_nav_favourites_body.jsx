import React, { PropTypes } from 'react';
import SideNavFavouritesOptions from './side_nav_favourites_options';
import SideNavFavouritesItemContainer from './side_nav_favourites_item_container';
import { Link, withRouter } from 'react-router-dom';

class SideNavFavouritesBody extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>
          {this.props.favourites.map (favourite =>
            <SideNavFavouritesItemContainer key={favourite.id} favourite={favourite}/>
          )}
        </div>
        <SideNavFavouritesOptions/>
      </div>
    );
  }
}

export default withRouter(SideNavFavouritesBody);
