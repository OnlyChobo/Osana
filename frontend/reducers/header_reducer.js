import { SET_HEADER } from '../actions/ui_actions';

export default function headerReducer(state = null, action) {
  switch (action.type) {
    case SET_HEADER:
      return action.header;
    default:
      return state;
  }
}
