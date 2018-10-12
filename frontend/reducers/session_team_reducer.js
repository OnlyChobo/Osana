import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TEAM } from '../actions/team_actions';
import merge from 'lodash/merge';

const sessionTeamReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TEAM:
      return ""+action.payload.team.id;
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default sessionTeamReducer;
