import { connect } from 'react-redux';
import SideNavTeamItem from './side_nav_team_item';
import { openModal, closeModal } from '../../actions/ui_actions';
import { selectProject, setModalPositions } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  modal: state.ui.modal,
  currentProjectId: state.session.projectId
});

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: modal => dispatch(closeModal(modal)),
  selectProject: project => dispatch(selectProject(project)),
  setModalPositions: element => dispatch(setModalPositions(element))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNavTeamItem);
