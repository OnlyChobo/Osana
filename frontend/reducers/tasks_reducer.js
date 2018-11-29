import { RECEIVE_TASKS, RECEIVE_TASK } from '../actions/task_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const tasksReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      return merge({}, action.payload.tasks);
    case RECEIVE_TASKS:
      return merge({}, action.payload);
    case RECEIVE_TASK:
      return merge({}, state, action.payload.task);
    default:
      return state;
  }
};

export default tasksReducer;
