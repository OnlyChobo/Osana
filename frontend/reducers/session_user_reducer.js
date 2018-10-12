import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionUserReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.keys(action.payload.users)[0];
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default sessionUserReducer;
