import { connect } from 'react-redux';
import SelectAssignedUser from './select_assigned_user';
import { openModal, closeModal } from '../../actions/ui_actions';
import { updateTask } from '../../actions/task_actions';

const mapStateToProps = (state) => ({
  currentUserId: state.session.id,
  teamMembers: Object.values(state.entities.users),
  task: state.entities.tasks[state.session.taskId]
});

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  updateTask: task => dispatch(updateTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectAssignedUser);
