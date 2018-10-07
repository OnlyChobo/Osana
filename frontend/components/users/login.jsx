import React from 'react';
import { Link } from 'react-router-dom';

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
    this.props.login(this.state);
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
      <div className='signin-container'>
        <form onSubmit={this.submitInput}>
          <label className='label'>
            Email Address
            <input
              className = 'input'
              type = 'text'
              value = { this.state.email }
              placeholder = 'name@company.com'
              onChange = {this.handleInput('email')}
            />
          </label>
          <label className='label'>
            Password
            <input
              className = 'input'
              type = 'password'
              value = { this.state.password }
              placeholder = 'Password'
              onChange = {this.handleInput('password')}
            />
          </label>
          <input type='submit' value='Log In'/>
        </form>
        <span><a href='#'>Forgot password?</a></span>
        <span>Don't have an account?<a href='#'>Sign up</a></span>
      </div>
    );
  }
}

export default Login;
