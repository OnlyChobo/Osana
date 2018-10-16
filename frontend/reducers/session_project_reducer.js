import { SELECT_PROJECT, UNSELECT_PROJECT } from '../actions/ui_actions';
import merge from 'lodash/merge';

const sessionProjectReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SELECT_PROJECT:
      return "" + action.project.id;
    case UNSELECT_PROJECT:
      return null;
    default:
      return state;
  }
};

export default sessionProjectReducer;
