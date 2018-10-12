import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fname: '',
      lname: ''
    };
    this.submitInput = this.submitInput.bind(this);
  }
  submitInput(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(
      data => {
        this.props.history.push(`/teams/${Object.keys(data.payload.users)[0]}/home`);
        this.props.closeModal();
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
    let name;
    if (this.props.formType === 'Sign Up') {
      name  = (
        <div className = 'login-input-group-pair'>
          <div className = 'login-input-group-pair-item'>
            <label htmlFor='login-fname' className='label'>
              First Name
            </label>
            <input
              id = 'login-fname'
              className = 'input'
              type = 'text'
              value = { this.state.fname }
              placeholder = 'First Name'
              onChange = {this.handleInput('fname')}
            />
          </div>
          <div className = 'login-input-group-pair-item'>
            <label htmlFor='login-lname' className='label'>
              Last Name
            </label>
            <input
              id = 'login-lname'
              className = 'input'
              type = 'text'
              value = { this.state.lname }
              placeholder = 'Last Name'
              onChange = {this.handleInput('lname')}
            />
          </div>
        </div>
      );
    }

    return (
      <div className = 'login-form-box'>
        <i onClick={this.props.closeModal} className="modal-close-button fas fa-times"></i>
        <div className = 'login-title'>{this.props.formTitle}</div>
        <form className='login-form' onSubmit={this.submitInput}>
          <ul>
            {this.props.errors.map(error => <li className='label'>{error}</li>)}
          </ul>
          {name}
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

          <input className = 'button login-button' type='submit' value={this.props.formType}/>
        </form>

        <div className = 'login-forgot-container'>
          <a href='#' className = 'login-forgot'>Forgot password?</a>
        </div>
        <div className = 'login-signup-container'>
          <p className = 'login-signup' >Don't have an account? {this.props.otherForm}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
