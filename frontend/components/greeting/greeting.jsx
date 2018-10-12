import React from 'react';
import UserDropdownContainer from './user_dropdown_container';
import AddDropdownContainer from './add_dropdown_container';
import SearchBarDropdown from './search_bar_dropdown';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownActive: 'none',
      searchBar: false,
      selectedProjects: [],
      initial: this.props.currentUser.fname[0]+this.props.currentUser.lname[0]
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleDropdown(button) {
    let status = this.state.dropdownActive;
    if (status !== 'none' && button === status) {
      this.setState({dropdownActive: 'none'});
    } else {
      this.setState({dropdownActive: button});
    }
  }

  handleSearchbar() {
    const {searchBar} = this.state;
    this.setState({searchBar: !searchBar});
  }

  handleSearch(e) {
    const newSelected = [];
    this.props.projects.forEach( project => {
      if (e.target.value.length > 0 && project.name.startsWith(e.target.value)) {
        newSelected.push(project);
      }
    });
    this.setState({selectedProjects: newSelected.slice()});
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
        <div>
          {html}
        </div>
        <div className = 'navBar-topRight'>
          <div>
            <input type='text'
              className='topNavBar-search'
              placeholder='Go to any project or task...'
              onClick={()=>this.handleSearchbar()}
              onChange={(e) => this.handleSearch(e)}/>
            { searchBar ? <SearchBarDropdown projects={this.state.selectedProjects} /> : <div></div>}
          </div>
          <div>
            <a className='topNavBar-addButton' onClick={()=>this.handleDropdown('add')}>+</a>
            { dropdownActive === 'add' ? <AddDropdownContainer/> : <div></div>}
          </div>
          <div>
            <div className='smallAvatar' onClick={()=>this.handleDropdown('avatar')}>
              {this.state.initial}
            </div>
            { dropdownActive === 'avatar' ? <UserDropdownContainer /> : <div></div>}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Greeting);
