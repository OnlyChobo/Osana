import { connect } from 'react-redux';
import TaskListTaskItems from './task_list_task_items';
import { openCommentPane, closeCommentPane } from '../../actions/ui_actions';


const mapStateToProps = state => ({
  commentPane: state.ui.commentPane
});

const mapDispatchToProps = dispatch => ({
  openCommentPane: () => dispatch(openCommentPane()),
  closeCommentPane: () => dispatch(closeCommentPane())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListTaskItems);
