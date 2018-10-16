import React from 'react';
import UserDropdownContainer from './user_dropdown_container';
import AddDropdownContainer from './add_dropdown_container';
import SearchBarDropdownContainer from './search_bar_dropdown_container';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProjects: [],
      initial: this.props.currentUser.fname[0]+this.props.currentUser.lname[0]
    };
  }

  render () {
    const currentUser = this.props.currentUser;
    let {dropdownActive, searchBar} = this.state;
    let html;
    if (!this.props.leftNavStatus) {
      html = (<i className="fas fa-bars fa-lg" onClick = {() => this.props.toggleLeftNav()}></i>);
    }
    return (
      <div className = 'navBar-top'>
        <div className = 'navBar-topLeft'>
          {html}
          <div className='navBar-header'>{this.props.header}</div>
        </div>
        <div className = 'navBar-topRight'>
          <div>
            <input type='text'
              className='topNavBar-search'
              placeholder='Go to any project or task...'
              onClick={()=>this.props.openModal('searchBar')}
              onChange={(e) => this.handleSearch(e)}/>
          </div>
          <div>
            <a className='topNavBar-addButton' onClick={()=>this.props.openModal('addDropdown')}>+</a>
          </div>
          <div>
            <div className='smallAvatar' onClick={()=>this.props.openModal('userDropdown')}>
              {this.state.initial}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Greeting);
