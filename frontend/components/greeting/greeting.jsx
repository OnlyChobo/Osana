import React from 'react';
import UserDropdown from './user_dropdown';
import AddDropdown from './add_dropdown';
import SearchBarDropdown from './search_bar_dropdown';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownActive: 'none',
      searchBar: false
    };
  }

  handleLogout() {
    this.props.logout().then(() => {
      console.log(this.props.history);
      this.props.history.push(`/`);
    }

    );
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

  render () {
    const currentUser = this.props.currentUser;
    let {dropdownActive, searchBar} = this.state;
    return (
      <div className = 'navBar-top'>
        <div className = 'navBar-topRight'>
          <div>
            <input type='text' className='topNavBar-search' placeholder='Go to any project or task...' onClick={()=>this.handleSearchbar()}/>
            { searchBar ? <SearchBarDropdown /> : <div></div>}
          </div>
          <div >
            <a className='topNavBar-addButton' onClick={()=>this.handleDropdown('add')}>+</a>
            { dropdownActive === 'add' ? <AddDropdown /> : <div></div>}
          </div>
          <div>
            <div className='smallAvatar' onClick={()=>this.handleDropdown('avatar')}>DX</div>
            { dropdownActive === 'avatar' ? <UserDropdown teams={this.props.teams} logout={this.handleLogout.bind(this)} /> : <div></div>}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Greeting);
