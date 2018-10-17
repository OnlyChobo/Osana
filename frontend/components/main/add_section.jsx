import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class AddSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.submitInput = this.submitInput.bind(this);
  }
  submitInput(e) {
    e.preventDefault();
    const newState = merge({}, this.state);
    this.props.createSection(newState).then(
      data => {
        this.setState({name: ''});
        this.props.closeModal();
      }
    );
  }

  handleInput(property) {
    return e => this.setState({[property]: e.target.value});
  }
  render() {
    return (
      <div className = 'profile-container'>
        <i onClick={this.props.closeModal} className="modal-close-button fas fa-times"></i>
        <div className = 'addProjectComponent-title'>New Section</div>
        <form className= 'addProjectComponent-form' onSubmit={this.submitInput}>
          <label htmlFor='projectName' className='addProject-label'>
            Section Name
          </label>
          <input
            id = 'projectName'
            className = 'addProject-input'
            type = 'text'
            value = { this.state.name }
            onChange = {this.handleInput('name')}
          />


          <div className = 'addProject-buttonContainer'>
            <input className = 'button addProject-button' type='submit' value='Create Section'/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(AddSection);
