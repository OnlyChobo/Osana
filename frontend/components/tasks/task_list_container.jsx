import {connect} from 'react-redux';
import TaskList from './task_list';

import {receiveTask, receiveTasks, removeTask} from '../../actions/task_actions';
import { allTasks } from '../../reducers/selectors';

const mapStateToProps = state => ({
  tasks: allTasks(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTasks: tasks=>dispatch(receiveTasks(tasks)),
  receiveTask: task=>dispatch(receiveTask(task)),
  removeTask: task=>dispatch(removeTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
