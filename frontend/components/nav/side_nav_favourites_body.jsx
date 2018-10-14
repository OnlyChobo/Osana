import React, { PropTypes } from 'react';
import SideNavFavouritesOptions from './side_nav_favourites_options';
import SideNavFavouritesItem from './side_nav_favourites_item';
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
            <Link to={`/teams/${this.props.match.params.teamId}/projects/${favourite.id}`}>
              <SideNavFavouritesItem key={favourite.id} favourite={favourite}/>
            </Link>
          )}
        </div>
        <SideNavFavouritesOptions/>
      </div>
    );
  }
}

export default withRouter(SideNavFavouritesBody);
