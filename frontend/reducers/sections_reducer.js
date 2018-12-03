import { RECEIVE_SECTION, RECEIVE_SECTIONS } from '../actions/section_actions';
import merge from 'lodash/merge';

const sectionsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SECTIONS:
      return merge({}, action.payload);
    case RECEIVE_SECTION:
      return merge({}, state, action.payload.section);
    default:
      return state;
  }
};

export default sectionsReducer;
