import { OPEN_COMMENT_PANE, CLOSE_COMMENT_PANE } from '../actions/ui_actions';

export default function commentPaneReducer(state = false, action) {
  switch (action.type) {
    case OPEN_COMMENT_PANE:
      return true;
    case CLOSE_COMMENT_PANE:
      return false;
    default:
      return state;
  }
}
