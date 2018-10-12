import React, { PropTypes } from 'react';

class SideNavTeamIconItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let initial;
    if (this.props.teamMember) {
      initial = this.props.teamMember.fname[0] + this.props.teamMember.lname[0];
    }
    return (
      <div className='ProfileIcon'>
        <div className='smallAvatar'>{initial}</div>
      </div>
    );
  }
}

export default SideNavTeamIconItem;
