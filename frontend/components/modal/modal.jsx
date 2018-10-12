import React from 'react';
import { closeModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import AddProjectContainer from '../main/add_project_container';
import ProfileContainer from '../main/profile_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'profile':
      console.log('test');
      component = <ProfileContainer />;
      break;
    case 'addProject':
      console.log('in here too');
      component = <AddProjectContainer />;
      break;

    default:
      return null;
  }
  console.log(component);
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-main" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
