import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { REMOVE_TEAM_MEMBERSHIP } from '../actions/team_membership_actions';
import merge from 'lodash/merge';

const teamMembershipsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge( {}, state, action.payload.teamMemberships);
    case REMOVE_TEAM_MEMBERSHIP:
      newState = merge({}, state);
      delete newState[action.teamMembership.id];
      return newState;
    default:
      return state;
  }
};

export default teamMembershipsReducer;
