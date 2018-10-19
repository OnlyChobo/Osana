import { SEARCH_BAR_TEXT } from '../actions/ui_actions';

export default function searchBarReducer(state = null, action) {
  switch (action.type) {
    case SEARCH_BAR_TEXT:
      return action.text;
    default:
      return state;
  }
}
