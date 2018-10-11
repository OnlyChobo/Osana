import { TOGGLE_LEFT_NAV } from '../actions/ui_actions';
import merge from 'lodash/merge';

const defaultState = {
  leftNav: true
};

const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_LEFT_NAV:
      const newState = merge( {}, state );
      newState.leftNav = !newState.leftNav;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
