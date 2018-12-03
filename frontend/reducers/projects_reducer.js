import { RECEIVE_PROJECT, RECEIVE_PROJECTS, REMOVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PROJECTS:
      return merge( {}, action.payload);
    case RECEIVE_PROJECT:
      return merge( {}, state, {[action.payload.projects.id]: action.payload.projects});
    case REMOVE_PROJECT:
      newState = merge({}, state);
      delete newState[action.project.id];
      return newState;
    default:
      return state;
  }
};

export default projectsReducer;
