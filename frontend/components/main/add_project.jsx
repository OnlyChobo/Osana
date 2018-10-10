import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AddProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      team_id: this.props.match.params.teamId
    };
    this.submitInput = this.submitInput.bind(this);
  }
  submitInput(e) {
    e.preventDefault();
    this.props.createProject(this.state).then(

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
      <div>
        <div className = 'login-title'>Log In</div>
        <form className='login-form' onSubmit={this.submitInput}>
          <div className = 'login-input-group'>
            <label htmlFor='login-email' className='label'>
              Project Name
            </label>
            <input
              id = 'login-email'
              className = 'input'
              type = 'text'
              value = { this.state.name }
              placeholder = 'name@company.com'
              onChange = {this.handleInput('name')}
            />
          </div>
          <div className = 'login-input-group'>
            <label htmlFor='login-password' className='label'>
              Description
            </label>
            <textarea
              id = 'login-password'
              className = 'input'
              value = { this.state.description }
              placeholder = 'Password'
              onChange = {this.handleInput('description')}
            />
        </div>

          <input className = 'button login-button' type='submit' value='Create Project'/>
        </form>
      </div>
    );
  }
}

export default withRouter(AddProject);
