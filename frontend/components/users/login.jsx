import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.submitInput = this.submitInput.bind(this);
  }
  submitInput(e) {
    e.preventDefault();
    this.props.login(this.state).then(
      data => {
        this.props.history.push(`/teams/${Object.keys(data.payload.users)[0]}/home`);
      }
    );
    this.setState({
      email: '',
      password: ''
    });
  }

  handleInput(property) {
    return e => this.setState({[property]: e.target.value});
  }
  render() {
    return (
      <div className = 'test'>
        <div className = 'login-title'>Log In</div>
        <form className='login-form' onSubmit={this.submitInput}>
          <div className = 'login-input-group'>
            <label htmlFor='login-email' className='label'>
              Email Address
            </label>
            <input
              id = 'login-email'
              className = 'input'
              type = 'text'
              value = { this.state.email }
              placeholder = 'name@company.com'
              onChange = {this.handleInput('email')}
            />
          </div>
          <div className = 'login-input-group'>
            <label htmlFor='login-password' className='label'>
              Password
            </label>
            <input
              id = 'login-password'
              className = 'input'
              type = 'password'
              value = { this.state.password }
              placeholder = 'Password'
              onChange = {this.handleInput('password')}
            />
        </div>

          <input className = 'button login-button' type='submit' value='Log In'/>
        </form>

        <div className = 'login-forgot-container'>
          <a href='#' className = 'login-forgot'>Forgot password?</a>
        </div>
        <div className = 'login-signup-container'>
          <p className = 'login-signup' >Don't have an account? <a href='#'>Sign up</a></p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
