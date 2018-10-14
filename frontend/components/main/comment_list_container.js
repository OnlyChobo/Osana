import { connect } from 'react-redux';
import CommentList from './comment_list';
import { closeCommentPane } from '../../actions/ui_actions';
import { fetchTask } from '../../actions/task_actions';


const mapStateToProps = state => ({
  comments: Object.values(state.entities.comments),
  task: state.entities.tasks[state.session.taskId],
  taskId: state.session.taskId
});

const mapDispatchToProps = dispatch => ({
  closeCommentPane: () => dispatch(closeCommentPane()),
  fetchTask: id => dispatch(fetchTask(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
