import {RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK} from '../actions/task_actions';
import merge from 'lodash/merge';

const tasksReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_TASKS:
      action.tasks.forEach(task => newState[task.id] = task);
      return newState;
    case RECEIVE_TASK:
      const newTask = {[action.task.id]: action.task};
      return merge({}, state, newTask);
    case REMOVE_TASK:
      newState = merge({}, state);
      delete newState[action.task.id];
      return newState;
    default:
      return state;
  }
};

export default tasksReducer;
