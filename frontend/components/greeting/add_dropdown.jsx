import React from 'react';
import Modal from '../home/modal';
import AddProjectContainer from '../main/add_project_container';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  showModal() {
    return () => this.setState({ show: true });
  }

  hideModal() {
    return () => this.setState({ show: false });
  }

  render () {
    return (
      <div className="user-dd-wrapper">
        <Modal show={this.state.show} handleClose={this.hideModal.bind(this)} color='white-background'>
          <AddProjectContainer hideModal={this.hideModal.bind(this)}/>
        </Modal>
        <ul className="user-dd-list">
          <li className="user-dd-team-list-item">Task</li>
          <li className="user-dd-team-list-item" onClick={this.showModal()}>Project</li>
          <li className="user-dd-team-list-item">Invite</li>
        </ul>
      </div>
    );
  }
}

export default UserDropdown;
