import { TOGGLE_LEFT_NAV } from '../actions/ui_actions';

const navBarReducer = (state = true, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_LEFT_NAV:
      return !state;
    default:
      return state;
  }
};

export default navBarReducer;
