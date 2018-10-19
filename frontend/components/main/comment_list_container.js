import { connect } from 'react-redux';
import CommentList from './comment_list';
import { closeCommentPane, openModal, setModalPositions } from '../../actions/ui_actions';
import { fetchTask, updateTask } from '../../actions/task_actions';
import { createComment } from '../../actions/comment_actions';


const mapStateToProps = state => ({
  comments: Object.values(state.entities.comments),
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
  task: state.entities.tasks[state.session.taskId],
  taskId: state.session.taskId
});

const mapDispatchToProps = dispatch => ({
  closeCommentPane: () => dispatch(closeCommentPane()),
  fetchTask: id => dispatch(fetchTask(id)),
  createComment: comment => dispatch(createComment(comment)),
  updateTask: task => dispatch(updateTask(task)),
  openModal: modal => dispatch(openModal(modal)),
  setModalPositions: element => dispatch(setModalPositions(element))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
