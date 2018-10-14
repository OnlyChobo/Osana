import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { OPEN_COMMENT_PANE } from '../actions/ui_actions';
import merge from 'lodash/merge';

const sessionTaskReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case OPEN_COMMENT_PANE:
      return action.id;
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default sessionTaskReducer;
