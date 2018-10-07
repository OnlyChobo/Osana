import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  render () {
    const currentUser = this.props.currentUser;
    let html;
    if (currentUser) {
      html = (
        <div>
          <h3>Welcome {currentUser.username}</h3>
        </div>
      );
    } else {
      html = (
        <div>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Login</Link>
        </div>
      );
    }
    return (
      <div className = 'navBar-top'>
        {html}
      </div>
    );
  }
}

export default Greeting;
