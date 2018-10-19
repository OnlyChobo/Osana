import { connect } from 'react-redux';
import TaskListTaskItems from './task_list_task_items';
import { openCommentPane, closeCommentPane } from '../../actions/ui_actions';
import { updateTask } from '../../actions/task_actions';


const mapStateToProps = state => ({
  commentPane: state.ui.commentPane,
  users: Object.values(state.entities.users),
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  openCommentPane: (id) => dispatch(openCommentPane(id)),
  closeCommentPane: () => dispatch(closeCommentPane()),
  updateTask: (task) => dispatch(updateTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListTaskItems);
