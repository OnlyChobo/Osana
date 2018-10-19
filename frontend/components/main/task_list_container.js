import { connect } from 'react-redux';
import TaskList from './task_list';
import { fetchProject } from '../../actions/project_actions';
import { openModal } from '../../actions/ui_actions';
import { openCommentPane, closeCommentPane, setHeader } from '../../actions/ui_actions';
import { createSection } from '../../actions/section_actions';
import { sortBy } from 'lodash';


const mapStateToProps = state => ({
  sections: Object.values(state.entities.sections),
  last_section: sortBy(Object.values(state.entities.sections), ['order']).slice(-1)[0],
  tasks: Object.values(state.entities.tasks).filter (task => !task.completed),
  commentPane: state.ui.commentPane,
  projects: state.entities.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  createSection: section => dispatch(createSection(section)),
  setHeader: header => dispatch(setHeader(header)),
  openModal: modal => dispatch(openModal(modal)),
  closeCommentPane: () => dispatch(closeCommentPane())
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
