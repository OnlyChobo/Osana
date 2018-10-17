import { SET_MODAL_POSITIONS } from '../actions/ui_actions';

export default function positionReducer(state = null, action) {
  switch (action.type) {
    case SET_MODAL_POSITIONS:
      let rect = action.element.getBoundingClientRect();
      return rect;
    default:
      return state;
  }
}
