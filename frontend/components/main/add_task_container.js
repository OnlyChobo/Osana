import { connect } from 'react-redux';
import { createTask } from '../../actions/task_actions';
import { openModal, closeModal } from '../../actions/ui_actions';
import AddTask from './add_task';
import { sortBy } from 'lodash';

const mapStateToProps = state => ({
  sections: Object.values(state.entities.sections),
  last_task: sortBy(Object.values(state.entities.tasks), ['order']).slice(-1)[0]
});

const mapDispatchToProps = dispatch => ({
  createTask: task=>dispatch(createTask(task)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
