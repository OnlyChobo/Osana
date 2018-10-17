import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      section_id: this.props.sections[0]
    };
    this.submitInput = this.submitInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  submitInput(e) {
    e.preventDefault();
    const newState = merge({}, this.state);
    newState.order = this.props.last_task.order+1;
    this.props.createTask(newState).then(
      data => {
        this.setState({name: '', description: ''});
        this.props.closeModal();
      }
    );
  }

  handleInput(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleChange(e) {
    this.setState({section_id:e.target.value});
  }

  render() {
    return (
      <div className = 'profile-container'>
        <i onClick={this.props.closeModal} className="modal-close-button fas fa-times"></i>
        <div className = 'addProjectComponent-title'>New Task</div>
        <form className= 'addProjectComponent-form' onSubmit={this.submitInput}>
          <label htmlFor='projectName' className='addProject-label'>
            Task Name
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
        <select value={this.state.section_id} onChange={this.handleChange}>
            {this.props.sections.map (section => <option key={section.id} value={section.id}>{section.name}</option>)}
          </select>

          <div className = 'addProject-buttonContainer'>
            <input className = 'button addProject-button' type='submit' value='Create Task'/>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTask;
