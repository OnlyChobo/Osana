import React, { PropTypes } from 'react';
import SideNavFavouritesBodyContainer from './side_nav_favourites_body_container';

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
      html = <SideNavFavouritesBodyContainer/>;
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
