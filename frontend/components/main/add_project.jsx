import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class AddProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.submitInput = this.submitInput.bind(this);
  }
  submitInput(e) {
    e.preventDefault();
    const newState = this.state;
    newState.team_id = this.props.match.params.teamId;
    this.props.createProject(newState).then(
      data => {
        this.setState({email: '', password: ''});
        this.props.hideModal()();
      }
    );
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
