import { connect } from 'react-redux';
import TaskList from './task_list';
import { fetchProject } from '../../actions/project_actions';
import { openModal } from '../../actions/ui_actions';
import { openCommentPane, setHeader } from '../../actions/ui_actions';


const mapStateToProps = state => ({
  sections: Object.values(state.entities.sections),
  tasks: Object.values(state.entities.tasks),
  commentPane: state.ui.commentPane,
  projects: state.entities.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  setHeader: header => dispatch(setHeader(header))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
