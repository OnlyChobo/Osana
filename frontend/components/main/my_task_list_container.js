import { connect } from 'react-redux';
import TaskList from './task_list';
import { fetchProject } from '../../actions/project_actions';
import { openModal } from '../../actions/ui_actions';
import { openCommentPane } from '../../actions/ui_actions';


const mapStateToProps = state => ({
  sections: Object.values(state.entities.sections),
  tasks: Object.values(state.entities.tasks).filter(task => task.id === state.session.id),
  commentPane: state.ui.commentPane
});

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
