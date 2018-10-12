import React from 'react';
import logo from '../../../app/assets/images/logo-home.png';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render () {
    return (
      <div className='home-main'>
        <div className='home-header-row'>
          <div className='home-nav-logo'>
            <img src= {logo} />
          </div>
          <nav className='home-horizontal-nav'>
            <a className='home-horizontal-nav-item' >Tour</a>
            <a className='home-horizontal-nav-item' >Product</a>
            <a className='home-horizontal-nav-item' >Pricing</a>
            <a className='home-horizontal-nav-item' >Contact Sales</a>
            <a className='home-horizontal-nav-item' >Learn more</a>
            <a className='home-horizontal-nav-item' onClick={() => this.props.openModal('login')} >Log In</a>
            <a className='home-start-trial' onClick={() => this.props.openModal('signup')} >Start Free Trial</a>
          </nav>
        </div>
        <div className='home-text-main-container'>
          <div className='home-text-container'>
            <h3>Make more time for the work that matters most</h3>
            <h2>
              Osana helps you coordinate all the work your team does together.
              So everyone knows what needs to get done, who’s responsible for
              doing it, and when it’s due.
            </h2>
          </div>
        </div>
        <div className = 'home-form-container'>
          <form className='home-form'>
            <input className = 'home-input' type='text' placeholder='name@company.com' />
            <input className = 'home-button' type='submit' value='Start Free Trial'/>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
