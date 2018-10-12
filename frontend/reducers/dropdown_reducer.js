import { OPEN_DROPDOWN, CLOSE_DROPDOWN } from '../actions/ui_actions';

export default function dropdownReducer(state = null, action) {
  switch (action.type) {
    case OPEN_DROPDOWN:
      return action.modal;
    case CLOSE_DROPDOWN:
      return null;
    default:
      return state;
  }
}
