import {RECEIVE_TASKS, RECEIVE_TASK, REMOVE_TASK} from '../actions/task_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const tasksReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_PROJECT:
      return merge({}, action.payload.tasks);
    default:
      return state;
  }
};

export default tasksReducer;
