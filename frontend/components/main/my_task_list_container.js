import { connect } from 'react-redux';
import TaskOnlyList from './task_only_list';
import { fetchTasks } from '../../actions/task_actions';
import { openModal } from '../../actions/ui_actions';
import { openCommentPane, closeCommentPane, setHeader } from '../../actions/ui_actions';


const mapStateToProps = state => ({
  tasks: Object.values(state.entities.tasks),
  commentPane: state.ui.commentPane,
  filter: { user_assigned_id: state.session.id },
  header: 'My Tasks'
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: data => dispatch(fetchTasks(data)),
  setHeader: header => dispatch(setHeader(header)),
  closeCommentPane: () => dispatch(closeCommentPane())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskOnlyList);
