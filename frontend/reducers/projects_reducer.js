import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';
import merge from 'lodash/merge';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, action.projects);
    default:
      return state;
  }
}

export default projectsReducer;
