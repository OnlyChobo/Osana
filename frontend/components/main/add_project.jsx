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
      data => this.props.hideModal()()
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
        <div className = 'addProjectComponent-title'>New Project</div>
        <form className= 'addProjectComponent-form' onSubmit={this.submitInput}>
          <label htmlFor='projectName' className='addProject-label'>
            Project Name
          </label>
          <input
            id = 'projectName'
            className = 'addProject-input'
            type = 'text'
            value = { this.state.name }
            onChange = {this.handleInput('name')}
          />
          <label htmlFor='projectDescription' className='addProject-label'>
            Description
          </label>
          <input
            id = 'projectDescription'
            className = 'addProject-input'
            type = 'text'
            value = { this.state.description }
            onChange = {this.handleInput('description')}
          />
          <div className = 'addProject-buttonContainer'>
            <input className = 'button addProject-button' type='submit' value='Create Project'/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AddProject);
