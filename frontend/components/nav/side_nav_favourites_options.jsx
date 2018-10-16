import React, { PropTypes } from 'react';

class SideNavFavouritesOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  toggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    let html;
    if (this.state.open) {
      html = (
        <div>
          <span className = "SideNavItems NavPage"><a>All Items</a></span>
          <span className = "SideNavItems NavPage"><a>Delete Items</a></span>
          <div className = 'SideNavMoreLess' onClick = {() => this.toggle()}>
            <span className = 'SideNavMoreLess-name'>Show less</span>
          </div>
        </div>);
    } else {
      html = (
        <div>
          <div className = 'SideNavMoreLess' onClick = {() => this.toggle()}>
            <span className = 'SideNavMoreLess-name'>Show more</span>
          </div>
        </div>
        );
    }
    return (
      <div>
        {html}
      </div>
    );
  }
}

export default SideNavFavouritesOptions;
