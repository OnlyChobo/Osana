import React from 'react';
import { closeModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import AddProjectContainer from '../main/add_project_container';
import ProfileContainer from '../main/profile_container';
import UserDropdownContainer from '../greeting/user_dropdown_container';
import AddDropdownContainer from '../greeting/add_dropdown_container';
import SearchBarDropdownContainer from '../greeting/search_bar_dropdown_container';
import SelectProjectContainer from '../main/select_project_container';
import SelectFavouriteContainer from '../main/select_favourite_container';

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
      component = <ProfileContainer />;
      break;
    case 'addProject':
      component = <AddProjectContainer />;
      break;
    case 'searchBar':
      component = <SearchBarDropdownContainer />;
      break;
    case 'userDropdown':
      component = <UserDropdownContainer />;
      break;
    case 'addDropdown':
      component = <AddDropdownContainer />;
      break;
    case 'projectOptions':
      component = <SelectProjectContainer />;
      break;
    case 'favouriteOptions':
      component = <SelectFavouriteContainer />;
      break;
    default:
      return null;
  }
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
