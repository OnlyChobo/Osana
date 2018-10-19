import React from 'react';
import { Link } from 'react-router-dom';
import merge from 'lodash/merge';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUserId,
      role: this.props.currentUser.role || '',
      department: this.props.currentUser.department || '',
      pronoun: this.props.currentUser.pronoun || '',
      about_me: this.props.currentUser.aboutMe || '',
      vacation_ind: this.props.currentUser.vacationInd || false
    };
  }

  componentWillMount() {
    
  }

  handleToggle() {
    return e => this.setState({vacation_ind: !this.state.vacation_ind});
  }

  handleInput(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state).then(
      this.props.closeModal()
    );
  }

  render() {
    let outer_switch = 'switch';
    let inner_switch = 'switch-view';
    if (this.state.vacation_ind) {
      outer_switch += ' checked';
      inner_switch += ' view-checked';
    }
    return (
      <div className = 'profile-container'>
        <i onClick={this.props.closeModal} className="modal-close-button fas fa-times"></i>
        <div className = 'addProjectComponent-title'>My Profile Settings</div>
        <form className = 'addProjectComponent-form' onSubmit={this.submitInput}>
          <table>
            <tr className = 'profile-input-row'>
              <td className = 'profile-input-left'>
                <label htmlFor='roleDescription' className='profile-label'>
                  Role
                </label>
              </td>
              <td className = 'profile-input-right'>
                <input
                  id = 'roleDescription'
                  className = 'profile-input'
                  type = 'text'
                  value = { this.state.role }
                  onChange = {this.handleInput('role')}
                />
            </td>
            </tr>
            <tr className = 'profile-input-row'>
              <td className = 'profile-input-left'>
                <label htmlFor='departmentDescription' className='profile-label'>
                  Department
                </label>
              </td>
              <td className = 'profile-input-right'>
                <input
                  id = 'departmentDescription'
                  className = 'profile-input'
                  type = 'text'
                  value = { this.state.department }
                  onChange = {this.handleInput('department')}
                />
            </td>
            </tr>
            <tr className = 'profile-input-row'>
              <td className = 'profile-input-left'>
                <label htmlFor='pronounsDescription' className='profile-label'>
                  Pronouns
                </label>
              </td>
              <td className = 'profile-input-right'>
                <input
                  id = 'pronounsDescription'
                  className = 'profile-input'
                  type = 'text'
                  placeholder = 'Third-person pronouns (e.g. she/her/hers)'
                  value = { this.state.pronoun }
                  onChange = {this.handleInput('pronoun')}
                />
            </td>
            </tr>
            <tr className = 'profile-input-row'>
              <td className = 'profile-input-left'>
                <label htmlFor='aboutMeDescription' className='profile-label'>
                  About Me
                </label>
              </td>
              <td className = 'profile-input-right'>
                <textarea
                  id = 'aboutMeDescription'
                  className = 'profile-input profile-input-textrea'
                  placeholder =
                    'I usually work from 9am - 5pm PST. Feel free to assign me a task
                    with a due date anytime. Also, I love dogs!'
                  value = { this.state.about_me }
                  onChange = {this.handleInput('about_me')}
                />
            </td>
            </tr>
            <tr className = 'profile-input-row'>
              <td className = 'profile-input-left'>
                <label className='profile-label'>
                  Vacation Indicator
                </label>
              </td>
              <td className = 'profile-input-right'>
                <div className={outer_switch} onClick={this.handleToggle()}>
                  <div className={inner_switch}>
                  </div>
                </div>
              </td>
            </tr>
            <div className = 'addProject-buttonContainer'>
              <input className = 'button addProject-button' type='submit' value='Update Profile' onClick={e => this.handleSubmit(e)}/>
            </div>
          </table>
        </form>
      </div>
    );
  }
}

export default Profile;
