import {
  RECEIVE_ALL_TEAM_MEMBERSHIPS,
  RECEIVE_TEAM_MEMBERSHIP,
  REMOVE_TEAM_MEMBERSHIP
} from '../actions/team_membership_actions';
import merge from 'lodash/merge';

const teamMembershipsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_TEAM_MEMBERSHIPS:
      return action.teamMemberships;
    case RECEIVE_TEAM_MEMBERSHIP:
      return merge({}, state, {[action.teamMembership.id]: action.teamMembership});
    case REMOVE_TEAM_MEMBERSHIP:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default teamMembershipsReducer;
