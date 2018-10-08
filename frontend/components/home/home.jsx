import React from 'react';
import Modal from './modal'
import LogInContainer from '../users/login_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  showModal() {
    return () => this.setState({ show: true });
  };

  hideModal() {
    return () => this.setState({ show: false });
  };

  render () {
    return (
      <div className='home-main'>
        <div className='home-header-row'>
          <Modal show={this.state.show} handleClose={this.hideModal()}>
            <LogInContainer />
          </Modal>
          <div className='home-nav-logo'>
            
          </div>
          <div className='home-nav-space'></div>
          <nav className='home-horizontal-nav'>
            <a className='home-horizontal-nav-item' >Tour</a>
            <a className='home-horizontal-nav-item' >Product</a>
            <a className='home-horizontal-nav-item' >Pricing</a>
            <a className='home-horizontal-nav-item' >Contact Sales</a>
            <a className='home-horizontal-nav-item' >Learn more</a>
            <a className='home-horizontal-nav-item' onClick={this.showModal()}>Log In</a>
            <a className='home-start-trial' >Start Free Trial</a>
          </nav>
        </div>
        <div>
          <div className='home-text-container'>
            <h3>Make more time for the work that matters most</h3>
            <h2>
              Asana helps you coordinate all the work your team does together.
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
    )
  }
}

export default Home;
