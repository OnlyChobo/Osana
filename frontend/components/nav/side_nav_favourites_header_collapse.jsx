import React, { PropTypes } from 'react';
import SideNavFavouritesBody from './side_nav_favourites_body';

class SideNavFavouritesHeaderCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  toggle() {
    const curr_status = this.state.open;
    this.setState({open: !curr_status});
  }


  render () {
    let html;
    if (this.state.open) {
      html = <SideNavFavouritesBody/>;
    }
    return (
      <div className = 'SideNavCollapsibleHeader'>
        <div className='SideNavTitles'>
          <span className='SideNavTitles-name' onClick = {() => this.toggle.bind(this)()}>Favorites</span>
        </div>
        {html}
      </div>
    );
  }
}

export default SideNavFavouritesHeaderCollapse;
