import React from 'react';
import { closeModal } from '../../actions/ui_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import AddProjectContainer from '../main/add_project_container';
import AddTaskContainer from '../main/add_task_container';
import ProfileContainer from '../main/profile_container';
import UserDropdownContainer from '../greeting/user_dropdown_container';
import AddDropdownContainer from '../greeting/add_dropdown_container';
import SearchBarDropdownContainer from '../greeting/search_bar_dropdown_container';
import SelectProjectContainer from '../main/select_project_container';
import SelectFavouriteContainer from '../main/select_favourite_container';

function ModalWithPosition({modal, closeModal, position}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'searchBar':
      component = <SearchBarDropdownContainer left={position.left} top={position.top} height={position.height}/>;
      break;
    case 'userDropdown':
      component = <UserDropdownContainer right={position.right} top={position.top} height={position.height} />;
      break;
    case 'addDropdown':
      component = <AddDropdownContainer right={position.right} top={position.top} height={position.height} />;
      break;
    case 'favouriteOptions':
      component = <SelectFavouriteContainer left={position.left} top={position.top} height={position.height} />;
      break;
    case 'projectOptions':
      component = <SelectProjectContainer left={position.left} top={position.top} height={position.height} />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-clear" onClick={closeModal}>
      <div className="modal-main-clear" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    position: state.ui.position
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWithPosition);
