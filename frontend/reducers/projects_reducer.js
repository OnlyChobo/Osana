import { RECEIVE_TEAM } from '../actions/team_actions';
import { RECEIVE_PROJECT } from '../actions/project_actions';
import merge from 'lodash/merge';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEAM:
      return merge( {}, action.payload.projects);
    case RECEIVE_PROJECT:
      return merge( {}, state, {[action.project.id]: action.project});
    default:
      return state;
  }
};

export default projectsReducer;
